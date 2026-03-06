import React, { useState } from "react";
import "../styles/AlertConfig.css";

function AlertConfig() {
  // ===== Threshold States =====
  const [tempLimit, setTempLimit] = useState(30);
  const [powerLimit, setPowerLimit] = useState(500);

  const [savedSettings, setSavedSettings] = useState({
    tempLimit: 30,
    powerLimit: 500,
    email: true,
    push: false,
    inApp: true,
    tempEnabled: true,
    powerEnabled: true,
  });

  // ===== Alert Type States =====
  const [email, setEmail] = useState(true);
  const [push, setPush] = useState(false);
  const [inApp, setInApp] = useState(true);

  // ===== Rule Toggle States =====
  const [tempEnabled, setTempEnabled] = useState(true);
  const [powerEnabled, setPowerEnabled] = useState(true);

  const [isSuccess, setIsSuccess] = useState(false);

  // ===== Save Handler =====
  const handleSave = () => {
    setSavedSettings({
      tempLimit,
      powerLimit,
      email,
      push,
      inApp,
      tempEnabled,
      powerEnabled,
    });

    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const isModified =
    tempLimit !== savedSettings.tempLimit ||
    powerLimit !== savedSettings.powerLimit ||
    email !== savedSettings.email ||
    push !== savedSettings.push ||
    inApp !== savedSettings.inApp ||
    tempEnabled !== savedSettings.tempEnabled ||
    powerEnabled !== savedSettings.powerEnabled;

  return (
    <div className="alert-page">
      <header className="page-header">
        <h1>Alert & Threshold Configuration</h1>
      </header>

      <div className="alert-card">
        {/* ===== Temperature Section ===== */}
        <section className="alert-section">
          <div className="section-header">
            <h2>Temperature Alert</h2>
            <label className="switch">
              <input
                type="checkbox"
                checked={tempEnabled}
                onChange={() => setTempEnabled(!tempEnabled)}
              />
              <span className="slider"></span>
            </label>
          </div>

          <p className="description">
            Set maximum temperature threshold.
          </p>

          <div className="input-group">
            <div className="custom-number-input">
              <button
                type="button"
                className="number-btn"
                onClick={() =>
                  setTempLimit(prev => Math.max(-50, prev - 1))
                }
                disabled={!tempEnabled}
              >
                −
              </button>

              <input
                type="number"
                value={tempLimit}
                onChange={(e) =>
                  setTempLimit(
                    Math.min(200, Math.max(-50, Number(e.target.value)))
                  )
                }
                disabled={!tempEnabled}
                className="alert-input"
              />

              <button
                type="button"
                className="number-btn"
                onClick={() =>
                  setTempLimit(prev => Math.min(200, prev + 1))
                }
                disabled={!tempEnabled}
              >
                +
              </button>
            </div>
            <span className="unit-label">°C</span>
          </div>
        </section>

        {/* ===== Power Section ===== */}
        <section className="alert-section">
          <div className="section-header">
            <h2>Power Usage Alert</h2>
            <label className="switch">
              <input
                type="checkbox"
                checked={powerEnabled}
                onChange={() => setPowerEnabled(!powerEnabled)}
              />
              <span className="slider"></span>
            </label>
          </div>

          <p className="description">
            Set unusual power usage limit.
          </p>

          <div className="input-group">
            <div className="custom-number-input">
              <button
                type="button"
                className="number-btn"
                onClick={() =>
                  setPowerLimit(prev => Math.max(0, prev - 10))
                }
                disabled={!powerEnabled}
              >
                −
              </button>

              <input
                type="number"
                value={powerLimit}
                onChange={(e) =>
                  setPowerLimit(
                    Math.min(10000, Math.max(0, Number(e.target.value)))
                  )
                }
                disabled={!powerEnabled}
                className="alert-input"
              />

              <button
                type="button"
                className="number-btn"
                onClick={() =>
                  setPowerLimit(prev => Math.min(10000, prev + 10))
                }
                disabled={!powerEnabled}
              >
                +
              </button>
            </div>
            <span className="unit-label">kWh</span>
          </div>
        </section>

        {/* ===== Notification Methods ===== */}
        <section className="alert-section">
          <h2>Notification Methods</h2>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={email}
                onChange={() => setEmail(!email)}
              />
              Email
            </label>

            <label>
              <input
                type="checkbox"
                checked={push}
                onChange={() => setPush(!push)}
              />
              Push Notification
            </label>

            <label>
              <input
                type="checkbox"
                checked={inApp}
                onChange={() => setInApp(!inApp)}
              />
              In-App Alert
            </label>
          </div>
        </section>

        {/* ===== Save Section ===== */}
        <div className="status-container">
          {isSuccess && (
            <span className="success-badge">
              Saved Successfully!
            </span>
          )}
        </div>

        <button
          className={`save-btn ${isModified ? "active" : "disabled"}`}
          onClick={handleSave}
          disabled={!isModified}
        >
          {isModified ? "Save Changes" : "No Changes"}
        </button>
      </div>
    </div>
  );
}

export default AlertConfig;
