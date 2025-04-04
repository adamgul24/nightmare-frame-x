
from flask import request, jsonify
import jwt
import datetime
from functools import wraps

SECRET_KEY = "NightmareSuperSecret"

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if 'Authorization' in request.headers:
            token = request.headers['Authorization'].split()[1]
        if not token:
            return jsonify({"message": "Token is missing!"}), 403
        try:
            jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        except:
            return jsonify({"message": "Token is invalid!"}), 403
        return f(*args, **kwargs)
    return decorated

def login_route(app):
    @app.route("/api/login", methods=["POST"])
    def login():
        data = request.get_json()
        if data["username"] == "admin" and data["password"] == "framex123":
            token = jwt.encode({
                "user": "admin",
                "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=6)
            }, SECRET_KEY, algorithm="HS256")
            return jsonify({"token": token})
        return jsonify({"message": "Invalid credentials"}), 401
