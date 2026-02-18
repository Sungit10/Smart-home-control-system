import "../styles/AdminDashboard.css";

export default function AdminDashboard() {
  return (
    <div className="dashboard-page">

      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back, Administrator 👋</p>
        </div>
        <div className="date-badge">
          {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="summary-grid">
        <div className="summary-card">
          <div className="card-icon">📟</div>
          <div>
            <h3>12</h3>
            <p>Total Devices</p>
          </div>
        </div>

        <div className="summary-card">
          <div className="card-icon">🟢</div>
          <div>
            <h3>9</h3>
            <p>Active Devices</p>
          </div>
        </div>

        <div className="summary-card alert">
          <div className="card-icon">⚠️</div>
          <div>
            <h3>3</h3>
            <p>Alerts Today</p>
          </div>
        </div>

        <div className="summary-card">
          <div className="card-icon">📡</div>
          <div>
            <h3>8</h3>
            <p>Online Sensors</p>
          </div>
        </div>
      </div>

      {/* System Overview */}
      <div className="card">
        <h2>System Overview</h2>

        <div className="overview-row">
          <span>Security System</span>
          <span className="status-badge active">ACTIVE</span>
        </div>

        <div className="overview-row">
          <span>Average Temperature</span>
          <span className="metric">24°C</span>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h2>Recent Activity</h2>
        <ul className="activity-list">
          <li>💡 Living Room Light turned ON</li>
          <li>🚪 Motion detected at Front Door</li>
          <li>🌡️ Thermostat set to 24°C</li>
        </ul>
      </div>

    </div>
  );
}
