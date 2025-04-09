# 🌌 Nightmare Frame X 🚀 --- Threat Simulation Suite

**Nightmare FrameX** is a fully operational, multi-language cyber range toolkit that simulates advanced phishing campaigns, command-and-control (C2) infrastructures, STIX threat intel output, and persistent agents — all wrapped in real-world offensive & defensive capabilities.

Built for serious cyber learners, red teamers, and defenders looking to study attack vectors and simulate real-world engagements. No bloat. No web UI. Just raw shell access, encryption, keystroke exfil, and full system compromise simulation — powered by C, Python, Assembly, Bash, and Java.

---

## 🚀 Core Features

### 🛡️ Threat Logging (C CLI)
- Menu-based CLI tool written in C
- Input threat indicator (URL/email), assign severity
- Logs to both plain `.log` and encrypted `.threatlog` using XOR cipher
- STIX-like JSON feed generation with `stix_output.py`

### 📡 Encrypted C2 Framework
- AES-CBC encrypted TCP channel between agent and C2
- Agent connects, reports system info, and responds to commands
- Operator can run `ping`, `exit`, or send arbitrary strings

### 🔁 Persistent Agent Support
- `install_agent.sh` sets agent as a cron job
- Auto-respawns on reboot via `.local/bin/framex_agent.py`
- Obfuscated connection logic with retry every 60s

### ✉️ Keylogger Simulation & Email Exfiltration
- Simulates keystroke logging
- Sends logs to specified email address using SMTP
- Fully configurable via `.env`

### 🧠 Threat Intelligence + IOC Analysis
- Load indicators of compromise from `python/iocs.txt`
- Scan historical logs for matches
- Output findings for SOC or blue team triage

### 🧾 STIX Feed Generator
- Converts input threats into structured JSON
- Appends entries to `logs/stix_feed.json`
- Each indicator includes ID, timestamp, severity, pattern

---

## 🧰 Tech Stack

| Language     | Usage                                      |
|--------------|---------------------------------------------|
| **C**        | CLI threat logger, XOR encryption           |
| **Python**   | C2 agent/server, AES, STIX, keylogger       |
| **Bash**     | Agent persistence installer                 |
| **Assembly** | Malware mimic (syscall + message encoder)   |
| **Java**     | Swing GUI log viewer                        |

---

## 📂 Project Structure

```bash
nightmare-framex-nsa/
├── core/                    # Threat CLI (C)
├── python/                  # C2, Agent, STIX, IOC, Keylogger
├── java/                    # GUI Log Viewer
├── automation/              # Install scripts
├── logs/                    # Encrypted logs + STIX feeds
├── asm/                     # Obfuscated malware mimic
├── Makefile                 # Build/run all modules
├── .env.example             # Secrets for AES + Email
```

---

## ⚙️ Setup Instructions

### 🔧 1. Install Dependencies
```bash
sudo apt install gcc python3 python3-pip default-jdk
pip3 install cryptography
```

### 🌍 2. Configure Secrets
Create a `.env` file from template:
```bash
cp .env.example .env
```
Edit and add:
```env
AES_SECRET=ns4level-c2-superkey
EXFIL_EMAIL=your.email@example.com
EMAIL_PASS=yourpassword
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
```

### 🧪 3. Run Commands

```bash
make build         # 🔧 Build C threat logger
make run           # 🛡️  Run CLI + log threats
make gui           # 🖥️  Launch Java GUI
make scan-iocs     # 🔍 IOC match scanner
make scan-url      # 🧠 Simulate VT scan
make fetch-iocs    # 🔁 Download mock IOC feed
```

```bash
# 🔒 Run Encrypted C2 Server
python3 python/c2_server.py

# 🤖 Connect Agent (in new terminal)
python3 python/agent.py

# 🧬 Log STIX Threat
python3 python/stix_output.py login-now.com high

# 📬 Simulate Keylogger Exfiltration
python3 python/keylogger.py

# ♻️ Install Persistent Agent
bash automation/install_agent.sh
```

---

## 🔐 Default Paths

| File                      | Description                             |
|---------------------------|-----------------------------------------|
| `logs/threats.log`       | Raw readable threat logs                |
| `logs/threats_encrypted.threatlog` | XOR-encrypted logs          |
| `logs/stix_feed.json`    | STIX format threat indicators           |
| `python/iocs.txt`        | IOC feed for threat scanning            |

---

## 📈 Future Upgrades

- Real keylogging via `pynput`
- Full STIX/TAXII sharing integration
- AES-encrypted file dropper
- Terminal-based TUI dashboard
- Real-time PCAP parsing and live attack detection

---

## 🧠 Why Use This?

This is the project that proves you're not just learning — you’re simulating.
- Show recruiters you understand red/blue ops
- Build a hacker-style cyber range without GUI bloat
- Create SOC training labs
- Train in encrypted comms, forensics, malware behavior

---

## 📜 License

MIT — Built to teach, simulate, and explore. Use it wisely. 🛡️

Crafted with 💻 and 🔥 by Adam Guled
