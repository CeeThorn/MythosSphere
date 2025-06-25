import requests
import sys

def search_anime(query):
    url = "https://api.jikan.moe/v4/anime"
    params = {
        "q": query,
        "limit": 5
    }

    response = requests.get(url, params=params)
    data = response.json()

    for anime in data.get("data", []):
        print(anime["title"], "-", anime["url"])

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python search.py <anime name>")
    else:
        search_anime(" ".join(sys.argv[1:]))