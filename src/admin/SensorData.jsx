import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../styles/SensorData.css";

function SensorData() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("daily");

  /* ============================= */
  /* GENERATE REAL-TIME DATA */
  /* ============================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newEntry = {
          time: new Date().toLocaleTimeString(),
          temperature: Number((20 + Math.random() * 10).toFixed(1)),
          humidity: Number((40 + Math.random() * 30).toFixed(1)),
          motion: Math.floor(Math.random() * 2),
          power: Number((100 + Math.random() * 50).toFixed(1)),
        };

        const updatedData = [...prevData, newEntry];

        // Keep only last 20 points for smooth real-time chart
        return updatedData.slice(-20);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* ============================= */
  /* EXPORT TO CSV */
  /* ============================= */

  const exportCSV = () => {
    const headers = ["Time", "Temperature", "Humidity", "Motion", "Power"];
    const rows = data.map((row) =>
      [row.time, row.temperature, row.humidity, row.motion, row.power].join(",")
    );

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "sensor_data.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="sensor-page">
      <header className="sensor-header">
        <h1>Sensor Data Visualization</h1>
        <p>Real-time IoT Monitoring Dashboard</p>
      </header>

      {/* FILTER + EXPORT */}
      <div className="sensor-controls">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>

        <button onClick={exportCSV} className="export-btn">
          Export CSV
        </button>
      </div>

      {/* CHART */}
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Line type="monotone" dataKey="temperature" stroke="#ef4444" />
            <Line type="monotone" dataKey="humidity" stroke="#3b82f6" />
            <Line type="monotone" dataKey="motion" stroke="#22c55e" />
            <Line type="monotone" dataKey="power" stroke="#f59e0b" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SensorData;
