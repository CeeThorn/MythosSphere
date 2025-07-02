from flask import jsonify, request, Blueprint
from ratelimit import limits, sleep_and_retry
from app.extensions import cache
import requests
import os

search_bp = Blueprint("search", __name__, url_prefix="/search")
TMDB_API_KEY = os.getenv("TMDB_API_KEY")
TMDB_BASE = "https://api.themoviedb.org/3/"
COMICVINE_API_KEY = os.getenv("COMIC_VINE_API_KEY")
COMICVINE_BASE = "https://comicvine.gamespot.com/api/"
headers = {"accept": "application/json", "Authorization": f"Bearer {TMDB_API_KEY}"}
BASE_TMDB_PARAMS = {"language": "en-US", "include_adult": False}
MEDIA_TYPES = ["movie", "tv"]
ERROR_MESSAGE = "Invalid Input"


@sleep_and_retry
@limits(calls=50, period=5)
@search_bp.route("/<string:query>", methods=["GET"])
@search_bp.route("/<string:searchComics>/<string:query>", methods=["GET"])
@search_bp.route("/<string:query>/<string:category>", methods=["GET"])
@cache.cached(timeout=3600, key_prefix="search")
def search(query, searchComics="empty", category="empty"):
    searchComics = searchComics.lower()
    category = category.lower()
    if not query or not isinstance(query, str):
        return jsonify({"Error": ERROR_MESSAGE})

    if searchComics in ("true", "false"):
        search_comicvine(query)
    elif searchComics == "empty" and category in (
        "anime",
        "manga",
        "characters",
        "people",
        "top",
    ):
        return (search_jikan(query, category))
    else:
        return (search_tmdb(query))


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
            return jsonify({"Status": "Failed"})
        return jsonify({"Status": "Success", "Payload": data, "Tag": "TMDB"})
    except Exception as e:
        return jsonify({"Error": str(e)})


@cache.memoize(timeout=3600)
def search_tmdb(query):
    if not query:
        return jsonify({"Error": "Invalid Query", "Message": "Valid Query Required"})

    query = query.lower().strip()

    params = BASE_TMDB_PARAMS.copy()
    params["query"] = query

    try:
        TMDB_SEARCH = f"{TMDB_BASE}search/multi"
        response = requests.get(url=TMDB_SEARCH, headers=headers, params=params)
        data = {}
        if response.status_code == 200:
            data = response.json()
        else:
            return jsonify({"Status": "Failed"})
        return jsonify(
            {"Status": "Success", "Payload": data.get("results"), "Tag": "TMDB"}
        )
    except Exception as e:
        return jsonify({"Error": str(e)})


@cache.memoize(timeout=7200)
def search_comicvine(query):
    if not query or not isinstance(query, str):
        return jsonify({"Error": "Invalid Query"})
    try:
        params = {"api_key": COMICVINE_API_KEY, "query": query}
        response = requests.get(url=f"{COMICVINE_BASE}search/", params=params)
        data = {}
        if response.status_code == 1:
            data = response.json()
        else:
            return jsonify({"Status": "Failed"})
        return jsonify({"Status": "Success", "Payload": data, "Tag": "ComicVine"})
    except Exception as e:
        return jsonify({"Error": str(e)})


def search_jikan(category, query):
    category = category.lower().strip()
    valid_categories = ["anime", "manga", "characters", "people", "top"]

    if category not in valid_categories:
        return (
            jsonify(
                {
                    "error": f"Invalid search category '{category}'. Valid options are: {', '.join(valid_categories)}"
                }
            ),
            400,
        )

    if not query:
        return jsonify({"error": "Missing query. Use /search/anime?q=naruto"}), 400

    params = BASE_JIKAN_PARAMS.copy()
    params["q"] = query
    category = f"{category}/anime" if category == "top" else category
    response = requests.get(f"{JIKAN_API_BASE}{category}", params=params)

    return jsonify(response.json())


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
            return jsonify({"Status": f"Failed: {response.status_code}"})

    except Exception as e:
        return jsonify({"Error": str(e)})


@search_bp.route("/valid-categories")
def get_valid_categories():
    valid_categories = ["anime", "manga", "characters", "people", "top"]
    return jsonify({"valid_categories": valid_categories})
