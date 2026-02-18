import { useState } from "react";
import AdminDashboard from "./AdminDashboard";
import DeviceManagement from "./DeviceManagement";
import SensorData from "./SensorData";
import AlertConfig from "./AlertConfig";
import "../styles/AdminLayout.css";

function AdminLayout() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "devices":
        return <DeviceManagement />;
      case "sensor":
        return <SensorData />;
      case "alerts":
        return <AlertConfig />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="admin-layout">

      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2>pelep san </h2>

        <button
          className={`nav-btn ${activePage === "dashboard" ? "active" : ""}`}
          onClick={() => setActivePage("dashboard")}
        >
          Dashboard
        </button>

        <button
          className={`nav-btn ${activePage === "devices" ? "active" : ""}`}
          onClick={() => setActivePage("devices")}
        >
          Devices
        </button>

        <button
          className={`nav-btn ${activePage === "sensor" ? "active" : ""}`}
          onClick={() => setActivePage("sensor")}
        >
          Sensor Data
        </button>

        <button
          className={`nav-btn ${activePage === "alerts" ? "active" : ""}`}
          onClick={() => setActivePage("alerts")}
        >
          Alert Settings
        </button>
      </aside>

      {/* Main Area */}
      <div className="admin-main">
        <div className="admin-content">
          {renderPage()}
        </div>
      </div>

    </div>
  );
}

export default AdminLayout;
