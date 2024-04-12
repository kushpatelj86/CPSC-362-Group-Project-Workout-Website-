from flask import Flask, request, jsonify
import sqlite3

app = Flask(fitfix)

@app.route('/create_user', methods=['POST'])
def create_user():
    data = request.json
    conn = sqlite3.connect('gym.db')
    cursor = conn.cursor()
    cursor.execute("INSERT INTO User (NAME, WEIGHT, HEIGHT, AGE, ALLERGIES) VALUES (?, ?, ?, ?, ?)",
                   (data['name'], data['weight'], data['height'], data['age'], data['allergies']))
    conn.commit()
    conn.close()
    return jsonify({"message": "User created successfully"}), 201

@app.route('/get_users', methods=['GET'])
def get_users():
    conn = sqlite3.connect('gym.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM User")
    users = cursor.fetchall()
    conn.close()
    return jsonify(users), 200

@app.route('/update_user/<int:cwid>', methods=['PUT'])
def update_user(cwid):
    data = request.json
    conn = sqlite3.connect('gym.db')
    cursor = conn.cursor()
    cursor.execute("UPDATE User SET NAME=?, WEIGHT=?, HEIGHT=?, AGE=?, ALLERGIES=? WHERE CWID=?",
                   (data['name'], data['weight'], data['height'], data['age'], data['allergies'], cwid))
    conn.commit()
    conn.close()
    return jsonify({"message": "User updated successfully"}), 200

@app.route('/delete_user/<int:cwid>', methods=['DELETE'])
def delete_user(cwid):
    conn = sqlite3.connect('gym.db')
    cursor = conn.cursor()
    cursor.execute("DELETE FROM User WHERE CWID=?", (cwid,))
    conn.commit()
    conn.close()
    return jsonify({"message": "User deleted successfully"}), 200

#@app.route('/createworkoutplan', methods = ['POST'])
@app.route('/generate_workout_plan', methods=['POST'])
def generate_workout_plan():
    data = request.json  # Assuming the request contains the selected workouts data
    # Process the selected workouts and generate the workout plan here
    
    # For demonstration purposes, let's just echo back the received data
    workout_plan = {
        "monday": data.get("monday", []),
        "tuesday": data.get("tuesday", []),
        "wednesday": data.get("wednesday", []),
        "thursday": data.get("thursday", []),
        "friday": data.get("friday", []),
        "saturday": data.get("saturday", []),
        "sunday": data.get("sunday", []),
    }
    
    return jsonify(workout_plan), 200

#create diet, create workout, find workout buddy, 




if __name__ == '__main__':
    app.run(debug=True)


