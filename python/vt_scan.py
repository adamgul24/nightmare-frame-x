import os
import sys

VT_API_KEY = os.getenv("VT_API_KEY", "your-api-key")

def scan_url(url):
    print(f"🔍 Simulated VirusTotal scan on: {url}")
    print("Result: 🚨 PHISHING" if "login" in url else "✅ CLEAN")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python vt_scan.py <url>")
    else:
        scan_url(sys.argv[1])
