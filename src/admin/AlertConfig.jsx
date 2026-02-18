import React, { useState, useEffect } from "react";
import "../styles/AlertConfig.css";

function AlertConfig() {
  const [tempLimit, setTempLimit] = useState(30);
  const [savedLimit, setSavedLimit] = useState(30);
  const [isSuccess, setIsSuccess] = useState(false);

  
  const handleSave = () => {
    setSavedLimit(tempLimit);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000); };

  
  const isModified = tempLimit !== savedLimit;

  return (
    <div className="alert-page">
      <header className="page-header">
        <h1>Settings</h1>
        <p>Configure how and when you receive notifications.</p>
      </header>

      <div className="alert-card">
        <section className="alert-section">
          <h2>Temperature Threshold</h2>
          <p className="description">
            Set the upper limit for temperature alerts.
          </p>

          <div className="input-group">
            <label htmlFor="temp-input" className="sr-only">
              Temperature Limit
            </label>
            <input
              id="temp-input"
              type="number"
              min="-50"
              max="200"
              value={tempLimit}
              onChange={(e) => setTempLimit(Number(e.target.value))}
              className="alert-input"
            />
            <span className="unit-label">°C</span>
          </div>

          <div className="status-container">
            <p className={`preview-text ${isModified ? "is-modified" : ""}`}>
              Current setting: <strong>{savedLimit}°C</strong>
            </p>
            {isSuccess && <span className="success-badge">Saved!</span>}
          </div>

          <button
            className={`save-btn ${isModified ? "active" : "disabled"}`}
            onClick={handleSave}
            disabled={!isModified}
          >
            {isModified ? "Save Changes" : "No Changes"}
          </button>
        </section>
      </div>
    </div>
  );
}

export default AlertConfig;