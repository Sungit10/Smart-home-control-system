import { NavLink, Outlet } from "react-router-dom";
import { 
  LayoutDashboard, 
  Cpu, 
  Activity, 
  ShieldAlert,
  Search,
  User
} from "lucide-react"; 
import "../styles/AdminLayout.css";

function AdminLayout() {
  const navItems = [
    { to: "/admin/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} />, end: true },
    { to: "/admin/dashboard/devices", label: "Devices", icon: <Cpu size={18} /> },
    { to: "/admin/dashboard/sensor", label: "Sensor Data", icon: <Activity size={18} /> },
    { to: "/admin/dashboard/alerts", label: "Alert Settings", icon: <ShieldAlert size={18} /> },
  ];

  return (
    <div className="admin-layout">
      {/* --- Sidebar --- */}
      <aside className="admin-sidebar">
        <div className="sidebar-brand">
          <div className="brand-logo">P</div>
          <h2 className="brand-name">Pelep San</h2>
        </div>

        <nav className="sidebar-nav">
          <p className="nav-section-title">Menu</p>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => 
                `nav-btn ${isActive ? "active" : ""}`
              }
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </NavLink>
          ))}
        </nav>
        {/* Preference footer removed */}
      </aside>

      {/* --- Main Area --- */}
      <main className="admin-main">
        <header className="admin-topbar">
          <div className="search-bar">
            <Search size={16} />
            <input type="text" placeholder="Search system..." />
          </div>
          
          <div className="user-actions">
            <div className="user-meta">
              <span className="user-name">Admin User</span>
              <span className="user-status">Online</span>
            </div>
            <div className="user-avatar">
              <User size={20} />
            </div>
          </div>
        </header>

        <section className="admin-content">
          <div className="content-inner">
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminLayout;