from flask import Flask, request, jsonify
from services.fetch_numbers import fetch_numbers
from services.number_storage import update_stored_numbers, get_stored_numbers
from services.calculate_average import calculate_average

app = Flask(__name__)

@app.route('/C:\\Users\\saksh\\OneDrive\\Desktop\\afformeds\\average-calci\\services\\calculate_average.py', methods=['POST'])
def calculate_average_route():
    data = request.json
    ids = data.get("ids", "")

    prev_state = get_stored_numbers()
    new_numbers = fetch_numbers(ids)
    
    update_stored_numbers(new_numbers)
    
    current_state = get_stored_numbers()
    average = calculate_average(current_state)
    
    response = {
        "windowPrevState": prev_state,
        "windowCurrState": current_state,
        "numbers": new_numbers,
        "avg": round(average, 2)
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
