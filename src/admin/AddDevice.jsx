import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddDevice.css";

function AddDevice() {
  const navigate = useNavigate();

  const [deviceName, setDeviceName] = useState("");
  const [deviceType, setDeviceType] = useState("Light");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Online");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!deviceName.trim()) {
      setError("Device name is required.");
      return;
    }

    if (!location.trim()) {
      setError("Device location is required.");
      return;
    }

    setError("");

    const newDevice = {
      name: deviceName,
      type: deviceType,
      location,
      description,
      status,
    };

    console.log("New Device:", newDevice);

    navigate("/admin/dashboard");
  };

  return (
    <div className="add-device-page">
      <div className="form-card">
        <h1>Add New Device</h1>
        <p className="form-subtitle">
          Configure and register a new device into the system.
        </p>

        <form onSubmit={handleSubmit} className="add-device-form">

          {error && <div className="error-message">⚠ {error}</div>}

          <label>Device Name</label>
          <input
            type="text"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
            placeholder="e.g. Kitchen Light"
          />

          <label>Device Type</label>
          <select
            value={deviceType}
            onChange={(e) => setDeviceType(e.target.value)}
          >
            <option value="Light">Light</option>
            <option value="Sensor">Sensor</option>
            <option value="Camera">Camera</option>
            <option value="Door">Door</option>
          </select>

          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Living Room"
          />

          <label>Description</label>
          <textarea
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Optional device description"
          />

          <label>Default Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>

          <div className="form-actions">
            <button type="submit" className="save-btn">
              💾 Save Device
            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate("/admin/dashboard")}
            >
              ✖ Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddDevice;
