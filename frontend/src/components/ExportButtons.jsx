
import React from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { CSVLink } from "react-csv";

const ExportButtons = ({ data }) => {
  const csvHeaders = [
    { label: "Timestamp", key: "timestamp" },
    { label: "Threat", key: "threat" },
    { label: "Severity", key: "severity" },
    { label: "Origin IP", key: "origin_ip" },
    { label: "Target Port", key: "target_port" },
    { label: "Location", key: "location" },
    { label: "Description", key: "description" }
  ];

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Nightmare FrameX – Threat Report", 10, 10);
    autoTable(doc, {
      startY: 20,
      head: [csvHeaders.map(h => h.label)],
      body: data.map(row => csvHeaders.map(h => row[h.key])),
    });
    doc.save("nightmare_threat_report.pdf");
  };

  return (
    <div className="flex gap-4 mb-4">
      <CSVLink
        headers={csvHeaders}
        data={data}
        filename="nightmare_threats.csv"
        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white text-sm"
      >
        Download CSV
      </CSVLink>
      <button
        onClick={exportPDF}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white text-sm"
      >
        Export PDF
      </button>
    </div>
  );
};

export default ExportButtons;
