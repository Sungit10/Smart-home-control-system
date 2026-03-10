import React, { useState, useMemo } from "react";
import { Bell, Thermometer, Zap, Save, CheckCircle } from "lucide-react"; // Optional: Use an icon library
import "../styles/AlertConfig.css";

// --- Sub-Component: Reusable Input ---
const ThresholdInput = ({ value, onChange, unit, disabled, min, max, step = 1 }) => (
  <div className={`input-group ${disabled ? "is-disabled" : ""}`}>
    <div className="custom-number-input">
      <button 
        type="button" 
        className="number-btn" 
        onClick={() => onChange(Math.max(min, value - step))}
        disabled={disabled}
      > − </button>
      
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Math.min(max, Math.max(min, Number(e.target.value))))}
        disabled={disabled}
        className="alert-input"
      />
      
      <button 
        type="button" 
        className="number-btn" 
        onClick={() => onChange(Math.min(max, value + step))}
        disabled={disabled}
      > + </button>
    </div>
    <span className="unit-label">{unit}</span>
  </div>
);

function AlertConfig() {
  const initialState = {
    tempLimit: 30,
    powerLimit: 500,
    email: true,
    push: false,
    inApp: true,
    tempEnabled: true,
    powerEnabled: true,
  };

  const [settings, setSettings] = useState(initialState);
  const [savedSettings, setSavedSettings] = useState(initialState);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Update specific fields dynamically
  const updateField = (field, value) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  // Check if anything has changed
  const isModified = useMemo(() => {
    return JSON.stringify(settings) !== JSON.stringify(savedSettings);
  }, [settings, savedSettings]);

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API Call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setSavedSettings(settings);
    setIsSaving(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="alert-page">
      <header className="page-header">
        <h1>System Thresholds</h1>
        
      </header>

      <div className="alert-card">
        {/* Temperature Section */}
        <section className="alert-section">
          <div className="section-header">
            <div className="title-with-icon">
              <Thermometer size={18} className="icon" />
              <h3>Temperature Alert</h3>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={settings.tempEnabled}
                onChange={(e) => updateField("tempEnabled", e.target.checked)}
              />
              <span className="slider"></span>
            </label>
          </div>
          <p className="description">Triggered when ambient temperature exceeds limit.</p>
          <ThresholdInput 
            value={settings.tempLimit}
            onChange={(val) => updateField("tempLimit", val)}
            unit="°C"
            min={-50}
            max={200}
            disabled={!settings.tempEnabled}
          />
        </section>

        {/* Power Section */}
        <section className="alert-section">
          <div className="section-header">
            <div className="title-with-icon">
              <Zap size={18} className="icon" />
              <h3>Power Usage Alert</h3>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={settings.powerEnabled}
                onChange={(e) => updateField("powerEnabled", e.target.checked)}
              />
              <span className="slider"></span>
            </label>
          </div>
          <p className="description">Alerts when consumption spikes above normal levels.</p>
          <ThresholdInput 
            value={settings.powerLimit}
            onChange={(val) => updateField("powerLimit", val)}
            unit="kWh"
            min={0}
            max={10000}
            step={10}
            disabled={!settings.powerEnabled}
          />
        </section>

        {/* Notifications Section */}
        <section className="alert-section">
          <div className="title-with-icon no-margin">
            <Bell size={18} className="icon" />
            <h3>Notification Channels</h3>
          </div>
          <div className="checkbox-grid">
            {['email', 'push', 'inApp'].map((type) => (
              <label key={type} className="checkbox-item">
                <input
                  type="checkbox"
                  checked={settings[type]}
                  onChange={(e) => updateField(type, e.target.checked)}
                />
                <span className="capitalize">{type.replace('inApp', 'In-App')}</span>
              </label>
            ))}
          </div>
        </section>

        {/* Footer Actions */}
        <footer className="card-footer">
          <div className="status-message">
            {showSuccess && (
              <span className="success-badge">
                <CheckCircle size={14} /> Changes saved successfully
              </span>
            )}
          </div>
          
          <button
            className={`save-btn ${isModified ? "active" : "disabled"}`}
            onClick={handleSave}
            disabled={!isModified || isSaving}
          >
            {isSaving ? "Saving..." : isModified ? "Save Changes" : "Up to date"}
          </button>
        </footer>
      </div>
    </div>
  );
}

export default AlertConfig;