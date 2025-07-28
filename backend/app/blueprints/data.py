from flask import jsonify, Blueprint
from app.extensions import cache
import os
import json

data_bp = Blueprint("data", __name__, url_prefix="/universes")


# @cache.memoize(timeout=3600)
@data_bp.route("/", methods=["GET"])
def get_universes():
    universes = []
    data_dir = "data"
    try:
        # The line is creating a list of directory names within the `data_dir` directory.
        universe_ids = [
            d for d in os.listdir(data_dir) if os.path.isdir(os.path.join(data_dir, d))
        ]

        for uid in universe_ids:
            universe_file_path = os.path.join(data_dir, uid, "universe.json")
            if os.path.exists(universe_file_path):
                with open(universe_file_path, "r") as f:
                    universe_data = json.load(f)
                    universes.append(universe_data)
        return jsonify({"Status": "Success", "Payload": universes})
    except Exception as e:
        return jsonify({"Error": str(e)})


@data_bp.route("/<string:universe_id>/galaxies", methods=["GET"])
def get_galaxies(universe_id):
    galaxies = []
    universe_dir = os.path.join("data", universe_id.lower())

    try:
        if not os.path.isdir(universe_dir):
            return jsonify({"Error": "Universe not found"})

        for filename in os.listdir(universe_dir):
            if filename.endswith(".json") and filename != "universe.json":
                galaxy_path = os.path.join(universe_dir, filename)
                with open(galaxy_path, "r") as f:
                    galaxy_data = json.load(f)
                    galaxies.append(
                        {
                            "id": galaxy_data.get("id"),
                            "name": galaxy_data.get("name"),
                            "description": galaxy_data.get("description"),
                            "start_year": galaxy_data.get("start_year"),
                            "end_year": galaxy_data.get("end_year"),
                            "iconicCharacters": galaxy_data.get("iconicCharacters", []),
                        }
                    )
        return jsonify({"Status": "Success", "Payload": galaxies})

    except Exception as e:
        return jsonify({"Error": str(e)})


@data_bp.route("/<string:universe_id>/galaxy/<string:galaxy_id>", methods=["GET"])
def get_full_galaxy_details(universe_id, galaxy_id):
    try:
        file_path = os.path.join(
            "data", universe_id.lower(), f"{galaxy_id.lower()}.json"
        )

        if not os.path.exists(file_path):
            return jsonify({"Error": "Galaxy not found"}), 404

        with open(file_path, "r") as f:

            galaxy_data = json.load(f)

        return jsonify({"Status": "Success", "Payload": galaxy_data})

    except Exception as e:
        return jsonify({"Error": str(e)}), 500
