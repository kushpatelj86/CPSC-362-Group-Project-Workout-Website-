import sqlite3

from flask import Flask, jsonify
app = Flask(__name__)
from flask_cors import CORS
CORS(app)
# Connect to the SQLite database
conn = sqlite3.connect('gym.db')

# Create a cursor object to execute SQL statements
cursor = conn.cursor()

# Function to check if a table exists
def table_exists(table_name):
    cursor.execute("SELECT name FROM sqlite_master WHERE type = 'table' AND name =?", (table_name,))
    return cursor.fetchone() 

if not table_exists('User'):    
# Execute the CREATE TABLE statement for User
    cursor.execute('''
        CREATE TABLE User (
            CWID INTEGER PRIMARY KEY AUTOINCREMENT,
            NAME VARCHAR(255),
            WEIGHT INTEGER,
            HEIGHT INTEGER,
            AGE INTEGER,
            ALLERGIES VARCHAR(255)
        )
    ''')

if not table_exists('DIET'):
    #relationship for user and food, 1 to N
    cursor.execute('''
        CREATE TABLE DIET (
            FWID INTEGER,
            FFID INTEGER,
            FOREIGN KEY (FWID) REFERENCES User(CWID) ON DELETE CASCADE,
            FOREIGN KEY (FFID) REFERENCES FOOD(FOOD_ID) ON DELETE CASCADE
        )
    ''')
if not table_exists('DAYS'):
    #multivalue attribute for Days in User
    cursor.execute('''
        CREATE TABLE DAYS (
            FWID INTEGER,
            DAY VARCHAR(255),
            FOREIGN KEY (FWID) REFERENCES User(CWID) ON DELETE CASCADE
        )
    ''')
if not table_exists('FOOD'):
# Execute the CREATE TABLE statement for FOOD
    cursor.execute('''
        CREATE TABLE FOOD (
            FOOD_NAME VARCHAR(255),
            FOOD_ID INT NOT NULL PRIMARY KEY,
            CALORIES INT,
            CARBS INT,
            FATS INT,
            PROTEINS INT,
            FIBER INT,
            FOOD_GROUP CHAR(9),
            RESTRICTION VARCHAR(255)
        )
    ''')

if not table_exists('EXERCISES'):
    #create table for exercise
    cursor.execute('''
        CREATE TABLE EXERCISES (
            EXERCISE_ID INT NOT NULL PRIMARY KEY,
            EXERCISE_NAME VARCHAR(255),
            REPS INT,
            SETS INT

        )
    ''')
if not table_exists('WORKOUT'):
    #create relationship between exercises and user
    cursor.execute('''
        CREATE TABLE WORKOUT (
            FWID INTEGER,
            F_EXERCISES INTEGER,
            FOREIGN KEY (FWID) REFERENCES User(CWID) ON DELETE CASCADE,
            FOREIGN KEY (F_EXERCISES) REFERENCES EXERCISES(EXERCISE_ID) ON DELETE CASCADE
        )
    ''')
if not table_exists('MUSCLE_GROUPS'):
    #create multivalue for muscle group for exercise
    cursor.execute('''
        CREATE TABLE MUSCLE_GROUP (
            FEX_ID INTEGER,
            MUSCLE VARCHAR,
            FOREIGN KEY (FEX_ID) REFERENCES EXERCISES(EXERCISE_ID) ON DELETE CASCADE

        )
    ''')
# Insert sample data into FOOD table
#cursor.execute("INSERT INTO FOOD (FOOD_NAME, CALORIES, CARBS, FATS, PROTEINS, FIBER, FOOD_GROUP) VALUES ('APPLE PIE', 60, 10, 0, 2, 0, 'CARBS')")
#cursor.execute("INSERT INTO FOOD (FOOD_NAME, CALORIES, CARBS, FATS, PROTEINS, FIBER, FOOD_GROUP) VALUES ('CHERRY PIE', 55, 11, 0, 1, 0, 'CARBS')")
#cursor.execute("INSERT INTO FOOD (FOOD_NAME, FOOD_ID, CALORIES, CARBS, FATS, PROTEINS, FIBER, FOOD_GROUP) VALUES ('BERRY PIE', 20, 58, 11, 0, 1, 0, 'CARBS')")



@app.route('/api/users')
def get_users():
    conn = sqlite3.connect('gym.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM User")
    users = cursor.fetchall()
    conn.close()
    # Convert the data to JSON format
    user_data = [{'CWID': user[0], 'NAME': user[1], 'WEIGHT': user[2], 'HEIGHT': user[3], 'AGE': user[4], 'ALLERGIES': user[5]} for user in users]
    return jsonify(user_data)
