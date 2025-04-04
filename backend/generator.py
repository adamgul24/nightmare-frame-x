
import json
from datetime import datetime
from random import choice, randint

def generate_sample_logs():
    threats = ["SQL Injection", "XSS Attack", "Brute Force", "Port Scan", "Malware Beacon"]
    severities = ["Low", "Medium", "High", "Critical"]
    logs = []

    for _ in range(20):
        logs.append({
            "timestamp": datetime.utcnow().isoformat(),
            "threat": choice(threats),
            "severity": choice(severities),
            "origin_ip": f"192.168.{randint(0,255)}.{randint(0,255)}",
            "target_port": randint(20, 65535),
            "description": "Auto-generated threat simulation",
            "location": choice(["New York, USA", "Berlin, Germany", "Tokyo, Japan", "São Paulo, Brazil", "Cairo, Egypt"])
        })

    with open("db/threats.json", "w") as f:
        json.dump(logs, f, indent=2)

if __name__ == "__main__":
    generate_sample_logs()
