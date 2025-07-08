from flask import jsonify, request, Blueprint
from ratelimit import limits, sleep_and_retry
from app.extensions import cache
import requests
import os

search_bp = Blueprint("search", __name__, url_prefix="/search")
TMDB_API_KEY = os.getenv("TMDB_API_KEY")
TMDB_BASE = "https://api.themoviedb.org/3/"
JIKAN_API_BASE = "https://api.jikan.moe/v4/"
COMICVINE_API_KEY = os.getenv("COMICVINE_API_KEY")
COMICVINE_BASE = "https://comicvine.gamespot.com/api/"
headers = {"accept": "application/json", "Authorization": f"Bearer {TMDB_API_KEY}"}
BASE_TMDB_PARAMS = {"language": "en-US", "include_adult": False}
BASE_JIKAN_PARAMS = {"limit": 5}
MEDIA_TYPES = ["movie", "tv"]
ERROR_MESSAGE = "Invalid Input"


@sleep_and_retry
@limits(calls=50, period=5)
@search_bp.route("/<string:query>", methods=["GET"])
@search_bp.route("/<string:query>/<string:category>", methods=["GET"])
def search(query, category="empty"):
    query = query.lower().strip()
    category = category.lower().strip()
    if not query or not isinstance(query, str):
        return jsonify({"Error": ERROR_MESSAGE})

    if category in (
        "anime",
        "manga",
        "characters",
        "people",
        "top",
    ):
        return search_jikan(category, query)
    elif category in ("comic", "book", "comicbook"):
        return search_comicvine(query)
    else:
        return search_tmdb(query)


@sleep_and_retry
@limits(calls=50, period=5)
@search_bp.route("/tmdb/details/<string:media_type>/<int:id>", methods=["GET"])
def get_tmdb_details(id, media_type):
    if not id or not isinstance(id, int):
        return jsonify({"Error": "Invalid Id"})
    if not media_type or media_type.lower() not in MEDIA_TYPES:
        return jsonify({"Error": "Invalid Media Type"})
    try:
        TMDB_DETAILS = f"{TMDB_BASE}{media_type.lower()}/{id}"
        params = {"append_to_response": "videos,images,keywords"}
        response = requests.get(url=TMDB_DETAILS, headers=headers, params=params)
        data = {}
        if response.status_code == 200:
            data = response.json()
        else:
            return jsonify({"Status": "Failed", "Code": response.status_code})
        return jsonify({"Status": "Success", "Payload": data, "Tag": "TMDB"})
    except Exception as e:
        return jsonify({"Error": str(e)})


@cache.memoize(timeout=3600)
def search_tmdb(query):
    params = BASE_TMDB_PARAMS.copy()
    params["query"] = query

    try:
        TMDB_SEARCH = f"{TMDB_BASE}search/multi"
        response = requests.get(url=TMDB_SEARCH, headers=headers, params=params)
        data = {}
        if response.status_code == 200:
            data = response.json()
        else:
            cache.delete_memoized(search_tmdb, query=query)
            return jsonify({"Status": "Failed", "Code": response.status_code})
        return jsonify({"Status": "Success", "tmdb": data, "source": "TMDB"})
    except Exception as e:
        return jsonify({"Error": str(e)})


@sleep_and_retry
@limits(calls=150, period=3600)
@cache.memoize(timeout=7200)
def search_comicvine(query):
    try:
        headers = {"User-Agent": "MythosSpehere/1.0"}
        params = {
            "api_key": COMICVINE_API_KEY,
            "format": "json",
            "query": query,
        }
        response = requests.get(
            url=f"{COMICVINE_BASE}search/", params=params, headers=headers
        )
        data = {}
        if response.status_code == 200:
            data = response.json()
        else:
            cache.delete_memoized(search_comicvine, query=query)
            return jsonify({"Status": "Failed", "Code": response.status_code})
        if data.get("status_code") == 1:
            return jsonify(
                {"Status": "Success", "comicvine": data, "source": "comicvine"}
            )
        else:
            return jsonify({"Status": "Failed", "Code": data.get("status_code")})
    except Exception as e:
        return jsonify({"Error": str(e)})


@cache.memoize(timeout=3600)
def search_jikan(category, query):
    params = BASE_JIKAN_PARAMS.copy()
    params["q"] = query
    category = f"{category}/anime" if category == "top" else category
    response = requests.get(f"{JIKAN_API_BASE}{category}", params=params)
    response.raise_for_status()
    data = response.json()

    return jsonify({"Status": "Success", "jikan": data, "source": "jikan"})


@search_bp.route("/jikan/details/<string:category>/<int:id>", methods=["GET"])
def get_jikan_details(category, id):
    category = category.lower().strip()
    valid_categories = ["anime", "manga", "characters", "people"]

    if not id or not isinstance(id, int):
        return jsonify({"Error": "Invalid Id"})

    if category not in valid_categories:
        return (
            jsonify(
                {
                    "Error": f"Invalid Category: {category}. Valid options are: {', '.join(valid_categories)}"
                }
            ),
            400,
        )

    try:
        JIKAN_DETAILS = f"{JIKAN_API_BASE}{category}/{id}"
        response = requests.get(url=JIKAN_DETAILS)
        data = {}

        if response.status_code == 200:
            data = response.json()
            return jsonify({"Status": "Success", "Payload": data})
        else:
            cache.delete_memoized(get_jikan_details, category=category, id=id)
            return jsonify({"Status": f"Failed: {response.status_code}"})

    except Exception as e:
        return jsonify({"Error": str(e)})


@search_bp.route("/valid-categories")
def get_valid_categories():
    valid_categories = ["anime", "manga", "characters", "people", "top"]
    return jsonify({"valid_categories": valid_categories})
