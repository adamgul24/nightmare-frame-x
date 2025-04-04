
from flask import Flask, jsonify
from flask_cors import CORS
from flask_socketio import SocketIO
import json
import os

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route("/api/threats")
def get_threats():
    with open("db/threats.json", "r") as f:
        data = json.load(f)
    return jsonify(data)

if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", port=10000)

from utils.auth import login_route
login_route(app)
