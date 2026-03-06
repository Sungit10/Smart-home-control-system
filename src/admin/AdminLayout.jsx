import { NavLink, Outlet } from "react-router-dom";
import "../styles/AdminLayout.css";

function AdminLayout() {
  return (
    <div className="admin-layout">

      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2>pelep san</h2>

        <NavLink
          to="/admin/dashboard"
          end
          className={({ isActive }) =>
            isActive ? "nav-btn active" : "nav-btn"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/dashboard/devices"
          className={({ isActive }) =>
            isActive ? "nav-btn active" : "nav-btn"
          }
        >
          Devices
        </NavLink>

        <NavLink
          to="/admin/dashboard/sensor"
          className={({ isActive }) =>
            isActive ? "nav-btn active" : "nav-btn"
          }
        >
          Sensor Data
        </NavLink>

        <NavLink
          to="/admin/dashboard/alerts"
          className={({ isActive }) =>
            isActive ? "nav-btn active" : "nav-btn"
          }
        >
          Alert Settings
        </NavLink>
      </aside>

      {/* Main Area */}
      <div className="admin-main">
        <div className="admin-content">
          <Outlet />
        </div>
      </div>

    </div>
  );
}

export default AdminLayout;
