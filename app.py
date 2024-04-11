from flask import Flask, jsonify, request
import sqlite3

app = Flask(__name__)
conn = sqlite3.connect('gym.db')
cursor = conn.cursor()


def table_exists(table_name):
    cursor.execute("SELECT name FROM sqlite_master WHERE type = 'table' AND name =?", (table_name,))
    return cursor.fetchone()



@app.route('/api/users', methods=['GET'])
def get_users():
    cursor.execute("SELECT * FROM User")
    users = cursor.fetchall()
    return jsonify(users)

@app.route('/api/users', methods=['POST'])
def add_user():
    data = request.get_json()
    name = data['name']
    weight = data['weight']
    height = data['height']
    age = data['age']
    allergies = data['allergies']

    cursor.execute("INSERT INTO User (NAME, WEIGHT, HEIGHT, AGE, ALLERGIES) VALUES (?, ?, ?, ?, ?)",
                   (name, weight, height, age, allergies))
    conn.commit()
    return jsonify({'message': 'User added successfully'})    

@app.route('/api/users/<int:cwid>', methods=['GET'])
def get_user_by_cwid(cwid):
    cursor.execute("SELECT * FROM User WHERE CWID = ?", (cwid,))
    user = cursor.fetchone()
    if user:
        return jsonify(user)
    else:
        return jsonify({'error': 'User not found'}), 404





if __name__ == '__main__':
    app.run(host='127.0.0.1', port=2345, debug=True)