import { useState } from "react";
import UserLogin from "./UserLogin";
import UserDashboard from "./LiveStatus";
import AlertsView from "./AlertsView";
import QuickControl from "./QuickControl";
import ActivityHistory from "./ActivityHistory";
import "./Mobile.css";

export default function MobileApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  if (!isLoggedIn) {
    return <UserLogin onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="mobile-container">
      <div className="mobile-content">
        {activeTab === "dashboard" && <UserDashboard />}
        {activeTab === "alerts" && <AlertsView />}
        {activeTab === "control" && <QuickControl />}
        {activeTab === "history" && <ActivityHistory />}
      </div>

      <div className="bottom-nav">
        <button onClick={() => setActiveTab("dashboard")}>Home</button>
        <button onClick={() => setActiveTab("alerts")}>Alerts</button>
        <button onClick={() => setActiveTab("control")}>Control</button>
        <button onClick={() => setActiveTab("history")}>History</button>
      </div>
    </div>
  );
}
