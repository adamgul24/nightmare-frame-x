
import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#38bdf8", "#fb923c", "#f87171", "#4ade80", "#facc15"];

const TypePie = ({ data }) => {
  const typeCount = {};
  data.forEach(item => {
    typeCount[item.threat] = (typeCount[item.threat] || 0) + 1;
  });

  const chartData = Object.entries(typeCount).map(([name, value]) => ({ name, value }));

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-2">Threat Type Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie dataKey="value" data={chartData} cx="50%" cy="50%" outerRadius={100} label>
            {chartData.map((_, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TypePie;
