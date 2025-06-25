import sys
from flask import Flask, redirect
from flask_cors import CORS  # CORS allows for cross-origin requests
import logging
from routes.search import search_bp


def create_app():
    app = Flask(__name__)
    # Initializes CORS
    CORS(app, origins=["http://localhost:3000", "file://*"])

    app.register_blueprint(search_bp)
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    )
    logger = logging.getLogger(__name__)

    return app


app = create_app()


# What happens when someone visits the default path.
@app.route("/")
def home():
    if getattr(sys, "frozen", False):
        return app.send_static_file("index.html")
    else:
        return redirect("http://localhost:3000")  # Redirects to proper url


# __main__ means that the script is running from this file
if __name__ == "__main__":
    app.run(debug="True")
