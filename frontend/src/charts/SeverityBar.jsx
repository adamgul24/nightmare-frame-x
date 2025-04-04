
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const SeverityBar = ({ data }) => {
  const counts = { Low: 0, Medium: 0, High: 0, Critical: 0 };
  data.forEach(item => counts[item.severity] = (counts[item.severity] || 0) + 1);

  const chartData = Object.entries(counts).map(([key, value]) => ({ severity: key, count: value }));

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-2">Threat Severity Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="severity" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#38bdf8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SeverityBar;
