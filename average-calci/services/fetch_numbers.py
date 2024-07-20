import requests
from config import TIMEOUT

def fetch_numbers(ids):
    url = "http://third-party-server.com/api"  # Replace with the actual URL
    try:
        response = requests.get(url, params={"ids": ids}, timeout=TIMEOUT)
        response.raise_for_status()
        return response.json().get("numbers", [])
    except (requests.exceptions.RequestException, ValueError):
        return []
