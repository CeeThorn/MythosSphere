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
# @search_bp.route("/<string:query>/<bool:isComic", methods=["GET"])
@search_bp.route("/<string:query>/<string:category>", methods=["GET"])
@cache.cached(timeout=3600, key_prefix="search")
def search(query, category=None):
    if not query or not isinstance(query, str):
        return jsonify({"Error": ERROR_MESSAGE})
    if category == None:
        search_tmdb(query)
    else:
        search_jikan(query, category)


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
        return jsonify({"Status": "Success", "Payload": data.get("results")})
    except Exception as e:
        return jsonify({"Error": str(e)})


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
        return jsonify({"Status": "Success", "Payload": data})
    except Exception as e:
        return jsonify({"Error": str(e)})


@search_bp.route("/comicvine/<string:query>", methods=["GET"])
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
        return jsonify({"Status": "Success", "Payload": data})
    except Exception as e:
        return jsonify({"Error": str(e)})
