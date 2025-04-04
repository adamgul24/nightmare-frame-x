
import React, { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("http://localhost:10000");

const ThreatTable = () => {
  const [threats, setThreats] = useState([]);

  useEffect(() => {
    const fetchThreats = async () => {
      const res = await axios.get("/api/threats");
      setThreats(res.data);
    };
    fetchThreats();

    socket.on("threat_alert", (data) => {
      setThreats(prev => [data, ...prev]);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="overflow-x-auto rounded shadow border border-gray-700">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-800 text-left">
          <tr>
            <th className="p-2">Time</th>
            <th className="p-2">Threat</th>
            <th className="p-2">Severity</th>
            <th className="p-2">Origin IP</th>
            <th className="p-2">Port</th>
            <th className="p-2">Location</th>
            <th className="p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {threats.map((t, i) => (
            <tr key={i} className="border-t border-gray-700 hover:bg-gray-800 transition">
              <td className="p-2">{t.timestamp}</td>
              <td className="p-2">{t.threat}</td>
              <td className="p-2">
                <span className={`px-2 py-1 rounded text-xs font-bold ${
                  t.severity === "Critical" ? "bg-red-700" :
                  t.severity === "High" ? "bg-orange-600" :
                  t.severity === "Medium" ? "bg-yellow-600 text-black" : "bg-green-600"
                }`}>
                  {t.severity}
                </span>
              </td>
              <td className="p-2">{t.origin_ip}</td>
              <td className="p-2">{t.target_port}</td>
              <td className="p-2">{t.location}</td>
              <td className="p-2">{t.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ThreatTable;
