import React, { useState } from "react";
import "../styles/DeviceManagement.css";

function DeviceManagement() {
  const [devices, setDevices] = useState([
    { id: 1, name: "Living Room Light", status: "Online" },
    { id: 2, name: "Front Door", status: "Offline" },
  ]);

  const [newDevice, setNewDevice] = useState("");

  const addDevice = () => {
    if (!newDevice.trim()) return;

    setDevices([
      ...devices,
      { id: Date.now(), name: newDevice, status: "Online" },
    ]);

    setNewDevice("");
  };

  const removeDevice = (id) => {
    setDevices(devices.filter((device) => device.id !== id));
  };

  const toggleStatus = (id) => {
    setDevices(
      devices.map((device) =>
        device.id === id
          ? {
              ...device,
              status: device.status === "Online" ? "Offline" : "Online",
            }
          : device
      )
    );
  };

  return (
    <div className="device-page">
      <h1>Device Management</h1>

      <div className="device-input-group">
        <input
          type="text"
          placeholder="Enter new device name..."
          value={newDevice}
          onChange={(e) => setNewDevice(e.target.value)}
        />
        <button className="add-btn" onClick={addDevice}>
          Add Device
        </button>
      </div>

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
                className="toggle-btn"
                onClick={() => toggleStatus(device.id)}
              >
                Toggle
              </button>

              <button
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
