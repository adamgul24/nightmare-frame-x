
import React, { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

import ThreatTable from "./components/ThreatTable";
import SeverityBar from "./charts/SeverityBar";
import TypePie from "./charts/TypePie";
import MapView from "./map/MapView";
import ExportButtons from "./components/ExportButtons";
import Login from "./components/Login";

const socket = io("http://localhost:10000");

const App = () => {
  const [threats, setThreats] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const fetchThreats = async () => {
      const res = await axios.get("/api/threats");
      setThreats(geoTagThreats(res.data));
    };
    fetchThreats();

    socket.on("threat_alert", (data) => {
      setThreats(prev => [geoTagThreat(data), ...prev]);
    });

    return () => socket.disconnect();
  }, []);

  const geoTagThreats = (data) => {
    return data.map(geoTagThreat);
  };

  const geoTagThreat = (threat) => {
    const locationMap = {
      "New York, USA": [40.7128, -74.006],
      "Berlin, Germany": [52.52, 13.405],
      "Tokyo, Japan": [35.6762, 139.6503],
      "São Paulo, Brazil": [-23.5505, -46.6333],
      "Cairo, Egypt": [30.0444, 31.2357]
    };
    const coords = locationMap[threat.location] || [0, 0];
    return { ...threat, lat: coords[0], lng: coords[1] };
  };

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Nightmare FrameX – Threat Intelligence Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <SeverityBar data={threats} />
        <TypePie data={threats} />
      </div>
      <MapView data={threats} />
      <ExportButtons data={threats} />
      <ThreatTable threats={threats} />
    </div>
  );
};

export default App;
