import React, { useState, useEffect, useMemo } from "react";
import "../styles/SensorData.css";

function SensorData() {
  const [temperature, setTemperature] = useState(25.0);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [trend, setTrend] = useState("neutral");
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature((prev) => {
        const change = (Math.random() * 1.4 - 0.7);
        const nextTemp = Number((prev + change).toFixed(1));
        setTrend(nextTemp > prev ? "up" : nextTemp < prev ? "down" : "neutral");
        return nextTemp;
      });
      
      setLastUpdated(new Date());
      setIsUpdating(true);
      const timer = setTimeout(() => setIsUpdating(false), 800);
      return () => clearTimeout(timer);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const statusInfo = useMemo(() => {
    if (temperature <= 28) return { label: "Normal", class: "normal", icon: "🌡️" };
    if (temperature <= 32) return { label: "Warning", class: "warning", icon: "⚠️" };
    return { label: "Critical", class: "critical", icon: "🚨" };
  }, [temperature]);

  return (
    <div className="sensor-page">
      <header className="sensor-header">
        <h1>Live Monitoring</h1>
        <p>Real-time environment telemetry</p>
      </header>

      <div className={`sensor-card ${statusInfo.class} ${isUpdating ? 'is-flashing' : ''}`}>
        <div className="sensor-visual">
          <div className="icon-wrapper">
             <span className="status-icon">{statusInfo.icon}</span>
            <div className={`pulse-ring ${statusInfo.class}`}></div>
          </div>
        </div>

        <div className="sensor-content">
          <div className="label-group">
            <div className="title-area">
              <h2>Ambient Temperature</h2>
              <span className={`trend-indicator ${trend}`}>
                {trend === "up" ? "↑" : trend === "down" ? "↓" : "—"}
              </span>
            </div>
            <span className={`status-badge ${statusInfo.class}`}>
              {statusInfo.label}
            </span>
          </div>

          <div className="value-display">
            <span className="number">{temperature.toFixed(1)}</span>
            <span className="unit">°C</span>
          </div>

          <footer className="sensor-footer">
            <div className="update-status">
              <span className="update-dot animate"></span>
              <span>Updated: {lastUpdated.toLocaleTimeString()}</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default SensorData;