"""
Primarily responsible for:

Directly configuring the Flask app itself (e.g., app.config settings like SECRET_KEY, database URI, etc., that are not specific to a single extension).

Orchestrating the initialization of extensions by calling the init_app(app) function from extensions.py.

Registering blueprints and any top-level routes.

Returning the fully assembled and configured app object.
"""

from app import create_app
import logging

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)

app = create_app()

# __main__ means that the script is running from this file
if __name__ == "__main__":
    app.run(debug="True")
