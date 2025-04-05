import React from "react";

const ThreatTable = ({ threats }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 mt-6 overflow-auto">
      <h2 className="text-2xl font-semibold mb-2">Threat Log</h2>
      <table className="table-auto w-full text-sm">
        <thead>
          <tr className="bg-gray-700">
            <th className="px-4 py-2 text-left">Timestamp</th>
            <th className="px-4 py-2 text-left">Source IP</th>
            <th className="px-4 py-2 text-left">Destination</th>
            <th className="px-4 py-2 text-left">Severity</th>
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Location</th>
          </tr>
        </thead>
        <tbody>
          {threats.map((threat, index) => (
            <tr key={index} className="border-b border-gray-600">
              <td className="px-4 py-2">{threat.timestamp}</td>
              <td className="px-4 py-2">{threat.source_ip}</td>
              <td className="px-4 py-2">{threat.destination}</td>
              <td className="px-4 py-2">{threat.severity}</td>
              <td className="px-4 py-2">{threat.type}</td>
              <td className="px-4 py-2">{threat.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ThreatTable;
