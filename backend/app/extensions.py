# Dedicated to initializing the extensions and binding them to the app instance.
import sys
import os
from flask_compress import Compress
from flask_caching import Cache  # For caching API Queries
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

cache = Cache()
limiter = Limiter(
    key_func=get_remote_address,
    storage_uri="memory://",
    strategy="fixed-window",
    default_limits=["200 per minute"],
)
compress = Compress()


def get_cache_dir():
    if getattr(sys, "frozen", False):

        cache_dir = os.path.join(sys._MEIPASS, "cache", "teleshow_cache")
    else:

        cache_dir = os.path.join(
            os.path.dirname(os.path.abspath(__file__)), "cache", "teleshow_cache"
        )

    # Makes sure that the directory exists
    os.makedirs(cache_dir, exist_ok=True)
    return cache_dir


def init_extensions(app):

    cache.init_app(
        app,
        config={
            "CACHE_TYPE": "FileSystemCache",
            "CACHE_DIR": get_cache_dir(),
            "CACHE_THRESHOLD": 5000,
            "CACHE_DEFAULT_TIMEOUT": 86400,
        },
    )
    compress.init_app(app)
    limiter.init_app(app)

    app.config["COMPRESS_MIMETYPES"] = [
        "text/html",
        "text/css",
        "text/xml",
        "application/json",
        "application/javascript",
    ]
    app.config["COMPRESS_LEVEL"] = 6  # Higher compression level 1-9
    app.config["COMPRESS_MIN_SIZE"] = (
        500  # Only compresses responses larger than 500 bytes
    )

    return app
