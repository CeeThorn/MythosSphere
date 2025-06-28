from flask import jsonify, request, Blueprint
import requests
import os

search_bp = Blueprint("search", __name__, url_prefix="/search")
TMDB_API_KEY = os.getenv("TMDB_API_KEY")
TMDB_BASE = "https://api.themoviedb.org/3/"
headers = {"accept": "application/json", "Authorization": f"Bearer {TMDB_API_KEY}"}
BASE_TMDB_PARAMS = {"language": "en-US", "include_adult": False}
MEDIA_TYPES = ["movie", "tv"]


@search_bp.route("/tmdb/<string:query>", methods=["GET"])
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


@search_bp.route("/anime")
def search_jikan():

    return jsonify()


search_bp = Blueprint("search", __name__, url_prefix="/search")
JIKAN_API_BASE = "https://api.jikan.moe/v4/"

BASE_JIKAN_PARAMS = {
        "limit": 5
    }



@search_bp.route("/")
def search_tmdb():

    return jsonify()



@search_bp.route("/<string:category>/<string:query>")
def search_category(category, query):
    category = category.lower().strip()
    valid_categories = ['anime', 'manga', 'characters', 'people', 'top']

    if category not in valid_categories:
        return jsonify({
            "error": f"Invalid search category '{category}'. Valid options are: {', '.join(valid_categories)}"
        }), 400

   
    
    if not query:
        return jsonify({"error": "Missing query. Use /search/anime?q=naruto"}), 400
    params = BASE_JIKAN_PARAMS.copy()
    params["q"] = query
    category = f"{category}/anime" if category == "top" else category   
    response = requests.get(f"{JIKAN_API_BASE}{category}", params=params)

    return jsonify(response.json())