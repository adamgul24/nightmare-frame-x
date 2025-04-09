import json
from datetime import datetime
import uuid

def to_stix(threat, severity):
    stix_object = {
        "type": "indicator",
        "id": f"indicator--{uuid.uuid4()}",
        "created": datetime.utcnow().isoformat() + "Z",
        "name": f"{severity}-threat",
        "pattern": f"[url:value = '{threat}']",
        "severity": severity
    }
    return stix_object

def log_stix(threat, severity, output_file="logs/stix_feed.json"):
    entry = to_stix(threat, severity)
    try:
        with open(output_file, "r") as f:
            data = json.load(f)
    except:
        data = []
    data.append(entry)
    with open(output_file, "w") as f:
        json.dump(data, f, indent=4)
    print(f"✅ STIX threat entry logged for: {threat}")

if __name__ == "__main__":
    import sys
    if len(sys.argv) != 3:
        print("Usage: python stix_output.py <threat> <severity>")
    else:
        log_stix(sys.argv[1], sys.argv[2])
