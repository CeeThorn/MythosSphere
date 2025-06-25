from flask import jsonify, Blueprint

search_bp = Blueprint("search", __name__)


@search_bp.route("/")
def search_tmdb():

    return jsonify()


@search_bp.route("/anime")
def search_jikan():

    return jsonify()
