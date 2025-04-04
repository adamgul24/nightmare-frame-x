
# 🛡️ Nightmare FrameX – Threat Intelligence Platform

Nightmare FrameX is a full-stack real-time cybersecurity dashboard built to simulate, monitor, and visualize active network threats. Designed for red/blue team demonstrations, recruiters, and advanced cyber engineering showcases.

---

## 🔥 Features

- 📡 Real-time threat alerts via WebSocket
- 📊 Severity bar + threat type pie charts
- 🌍 Geo-IP threat map with marker clustering
- 🧾 CSV & PDF export of live threat logs
- 🔐 Admin login + route protection (JWT-based)
- 🎨 Sleek dark-mode responsive UI (TailwindCSS + React)

---

## 🛠 Tech Stack

| Frontend      | Backend           | Tooling & Extras         |
|---------------|-------------------|---------------------------|
| React.js      | Flask + SocketIO  | Leaflet, jsPDF, Recharts |
| TailwindCSS   | REST API          | JWT Auth, CSV Export     |
| Axios         | Python 3.11       | WebSockets, SQLite       |

---

## 🚀 Live Demos

- **Frontend:** [https://real-time-threat-dashboard.vercel.app](https://real-time-threat-dashboard.vercel.app)
- **Backend API:** [https://real-time-threat-dashboard.onrender.com](https://real-time-threat-dashboard.onrender.com)

---

## 🔐 Admin Access

Login credentials:

```
Username: admin
Password: framex123
```

---

## 📁 Project Structure

```
NightmareFrameX/
├── frontend/
│   └── src/
│       ├── components/
│       ├── charts/
│       ├── map/
│       └── assets/
├── backend/
│   ├── db/
│   └── utils/
└── README.md
```

---

## 📦 Setup Instructions

**Backend (Render):**
```bash
cd backend
pip install -r requirements.txt
python generator.py
python app.py
```

**Frontend (Vercel):**
```bash
cd frontend
npm install
npm run start
```

---

## 👨‍💻 Author

Made with 💻 and 🔐 by [@adamgul24](https://github.com/adamgul24)

---

## 🧠 License

MIT – use, fork, break, and improve.
