import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DeviceManagement.css";

function DeviceManagement() {
  const navigate = useNavigate();

  const [devices, setDevices] = useState([
    { id: 1, name: "Living Room Light", status: "Online" },
    { id: 2, name: "Front Door", status: "Offline" },
  ]);

  // REMOVE DEVICE
  const removeDevice = (id) => {
    setDevices((prev) => prev.filter((device) => device.id !== id));
  };

  // TOGGLE STATUS
  const toggleStatus = (id) => {
    setDevices((prev) =>
      prev.map((device) =>
        device.id === id
          ? {
              ...device,
              status:
                device.status === "Online" ? "Offline" : "Online",
            }
          : device
      )
    );
  };

  return (
    <div className="device-page">
      <h1>Device Management</h1>

      {/* Add Device Button */}
      <div className="device-input-group">
        <button
          type="button"
          className="add-btn"
          onClick={() => navigate("/admin/dashboard/add-device")}
        >
          Add Device
        </button>
      </div>

      {/* Device Grid */}
      <div className="device-grid">
        {devices.map((device) => (
          <div key={device.id} className="device-card">
            <div className="device-info">
              <h3>{device.name}</h3>
              <p>
                Status:
                <span
                  className={
                    device.status === "Online"
                      ? "status online"
                      : "status offline"
                  }
                >
                  {device.status}
                </span>
              </p>
            </div>

            <div className="device-actions">
              <button
                type="button"
                className="toggle-btn"
                onClick={() => toggleStatus(device.id)}
              >
                Toggle
              </button>

              <button
                type="button"
                className="remove-btn"
                onClick={() => removeDevice(device.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeviceManagement;
