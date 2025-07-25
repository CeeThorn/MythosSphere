# Named it __init__.py because python automatically treats the file as a package
# Therefore instead of import the create_app from MythosSphere I dont have to.
# Python automagically looks for create_app in an __init__.py file

"""
Runs the application
"""
import sys
from flask import Flask, redirect
from flask import Flask
from flask_cors import CORS  # CORS allows for cross-origin requests

from app.extensions import init_extensions
from app.blueprints.search import search_bp
from app.blueprints.data import data_bp


def create_app():
    app = Flask(__name__)
    init_extensions(app)
    app.register_blueprint(search_bp)
    app.register_blueprint(data_bp)
    # Initializes CORS
    CORS(app, origins=["http://localhost:5173"])

    # What happens when someone visits the default path.
    @app.route("/")
    def home():
        if getattr(sys, "frozen", False):
            return app.send_static_file("index.html")
        else:
            return redirect("http://localhost:5173")  # Redirects to proper url

    return app
