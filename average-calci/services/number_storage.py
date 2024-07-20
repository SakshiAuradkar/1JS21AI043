import threading
from config import WINDOW_SIZE

stored_numbers = []
lock = threading.Lock()

def update_stored_numbers(new_numbers):
    global stored_numbers
    with lock:
        unique_new_numbers = [num for num in new_numbers if num not in stored_numbers]
        stored_numbers.extend(unique_new_numbers)
        if len(stored_numbers) > WINDOW_SIZE:
            stored_numbers = stored_numbers[-WINDOW_SIZE:]

def get_stored_numbers():
    with lock:
        return stored_numbers.copy()
