import { useState, useEffect } from "react";
import "../styles/AdminDashboard.css";

export default function AdminDashboard() {

  /* ===============================
     ADMIN SESSION (Simulated)
  =============================== */
  const adminUser = {
    name: "System Administrator",
    role: "Super Admin",
  };

  /* ===============================
     USERS (Simulated Database)
  =============================== */
  const [users] = useState([
    { id: 1, name: "Jan" },
    { id: 2, name: "Maria" },
    { id: 3, name: "Carlos" },
    { id: 4, name: "Anne" },
  ]);

  /* ===============================
     DEVICES
  =============================== */
  const [devices, setDevices] = useState([
    { id: 1, name: "Living Room Light", status: "online" },
    { id: 2, name: "Front Door Sensor", status: "online" },
    { id: 3, name: "Thermostat", status: "online" },
    { id: 4, name: "Garage Camera", status: "offline" },
    { id: 5, name: "Bedroom AC", status: "online" },
  ]);

  /* ===============================
     SENSOR DATA (Real-Time Simulation)
  =============================== */
  const [temperature, setTemperature] = useState(24);
  const [humidity, setHumidity] = useState(50);
  const [motionDetected] = useState(false);
  const [powerUsage, setPowerUsage] = useState(420);

  const [alerts, setAlerts] = useState([]);

  /* ===============================
     COMPUTED VALUES
  =============================== */
  const totalUsers = users.length;
  const totalDevices = devices.length;
  const activeDevices = devices.filter(d => d.status === "online").length;
  const offlineDevices = totalDevices - activeDevices;

  /* ===============================
     REAL-TIME SENSOR SIMULATION
  =============================== */
  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature(prev => prev + (Math.random() * 2 - 1));
      setHumidity(prev => prev + (Math.random() * 2 - 1));
      setPowerUsage(prev => prev + (Math.random() * 10 - 5));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* ===============================
     ALERT LOGIC
  =============================== */
  useEffect(() => {
    let newAlerts = [];

    if (temperature >= 30) {
      newAlerts.push("🔥 High Temperature Alert");
    }

    if (powerUsage >= 500) {
      newAlerts.push("⚡ High Power Consumption");
    }

    if (offlineDevices > 1) {
      newAlerts.push("📡 Multiple Devices Offline");
    }

    setAlerts(newAlerts);
  }, [temperature, powerUsage, offlineDevices]);

  /* ===============================
     TOGGLE DEVICE STATUS
  =============================== */
  const toggleDeviceStatus = (id) => {
    setDevices(prev =>
      prev.map(device =>
        device.id === id
          ? {
              ...device,
              status: device.status === "online" ? "offline" : "online"
            }
          : device
      )
    );
  };

  return (
    <div className="dashboard-page">

      {/* HEADER */}
      <div className="page-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>
            Welcome back, {adminUser.name} ({adminUser.role})
          </p>
        </div>
        <div className="date-badge">
          {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="summary-grid">

        <div className="summary-card">
          <div className="card-icon">👥</div>
          <div className="card-info">
            <h3>{totalUsers}</h3>
            <p>Total Users</p>
          </div>
        </div>

        <div className="summary-card">
          <div className="card-icon">📟</div>
          <div className="card-info">
            <h3>{totalDevices}</h3>
            <p>Total Devices</p>
          </div>
        </div>

        <div className="summary-card">
          <div className="card-icon">🟢</div>
          <div className="card-info">
            <h3>{activeDevices}</h3>
            <p>Online Devices</p>
          </div>
        </div>

        <div className="summary-card">
          <div className="card-icon">🔴</div>
          <div className="card-info">
            <h3>{offlineDevices}</h3>
            <p>Offline Devices</p>
          </div>
        </div>

      </div>

      {/* ALERT PANEL */}
      <div className="card">
        <h2>Active Alerts</h2>
        {alerts.length === 0 ? (
          <p className="no-alert">No active alerts</p>
        ) : (
          alerts.map((alert, index) => (
            <div key={index} className="alert-item">
              {alert}
            </div>
          ))
        )}
      </div>

      {/* REAL-TIME SENSOR SUMMARY */}
      <div className="card">
        <h2>Real-Time Sensor Summary</h2>

        <div className="sensor-grid">
          <div className="sensor-card">
            🌡 Temperature
            <span>{temperature.toFixed(1)} °C</span>
          </div>

          <div className="sensor-card">
            💧 Humidity
            <span>{humidity.toFixed(1)} %</span>
          </div>

          <div className="sensor-card">
            ⚡ Power Usage
            <span>{powerUsage.toFixed(0)} W</span>
          </div>

          <div className="sensor-card">
            🚪 Motion
            <span>{motionDetected ? "Detected" : "None"}</span>
          </div>
        </div>
      </div>

      {/* DEVICE STATUS MANAGEMENT */}
      <div className="card">
        <h2>Device Status</h2>

        {devices.map(device => (
          <div key={device.id} className="device-row">
            <span>{device.name}</span>

            <span
              className={`status-badge ${
                device.status === "online"
                  ? "status-online"
                  : "status-offline"
              }`}
            >
              {device.status === "online"
                ? "🟢 Online"
                : "🔴 Offline"}
            </span>

            <button
              onClick={() => toggleDeviceStatus(device.id)}
              className="action-btn small"
            >
              Toggle
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}