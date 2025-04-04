
from flask_socketio import SocketIO, emit
import json, time, threading

socketio = SocketIO()

def threat_stream():
    with open("db/threats.json") as f:
        threats = json.load(f)

    def stream():
        while True:
            for threat in threats:
                socketio.emit("threat_alert", threat)
                time.sleep(3)

    thread = threading.Thread(target=stream)
    thread.daemon = True
    thread.start()
