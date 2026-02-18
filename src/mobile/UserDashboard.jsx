import { useState, useEffect } from "react";
import "../styles/UserDashboard.css";

export default function UserDashboard() {
  const [temperature, setTemperature] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature((prev) =>
        prev + (Math.random() > 0.5 ? 1 : -1)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mobile-page">

      <h3 className="section-title">Live Status</h3>

      <div className="status-card">
        <div className="status-icon">🌡️</div>
        <div className="status-info">
          <span className="status-label">Temperature</span>
          <span className="status-value">{temperature}°C</span>
        </div>
      </div>

    </div>
  );
}
