from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import bcrypt # For secure password hashing
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///boutique.db'
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

with app.app_context():
    db.create_all()

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    hashed_pw = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(username=data['username'], password=hashed_pw)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "Registered!"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(username=data['username']).first()
    if user and bcrypt.check_password_hash(user.password, data['password']):
        return jsonify({"message": "Success"}), 200
    return jsonify({"message": "Invalid"}), 401

if __name__ == '__main__':
    app.run(debug=True)

users_db = {}

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password').encode('utf-8')

    if username in users_db:
        return jsonify({"message": "User already exists"}), 400
    
    hashed_password = bcrypt.hashpw(password, bcrypt.gensalt())

    users_db[username] = {
        "password": hashed_password,
        "email": data.get('email')
    }

    return jsonify({"message": "User registered successfully!"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password_attempt = data.get('password').encode('utf-8')

    user = users_db.get(username)

    if user and bcrypt.checkpw(password_attempt, user['password']):
        return jsonify({"message": "Login successful!", "role": "user"}),

    return jsonify({"message": "Invalid username or password"}), 401

if __name__ == '__main__':
    app.run(debug=True)

@app.route('/admin/locations')
def get_locations(): 
    return jsonify({"locations": ["NYC", "London", "Paris"]})