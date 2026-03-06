import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./admin/AdminLogin";
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import DeviceManagement from "./admin/DeviceManagement";
import SensorData from "./admin/SensorData";
import AlertConfig from "./admin/AlertConfig";
import AddDevice from "./admin/AddDevice";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>

        {/* Default route */}
        <Route path="/" element={<Navigate to="/admin" />} />

        {/* Admin Login */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* Admin Pages */}
        <Route path="/admin/dashboard" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="devices" element={<DeviceManagement />} />
          <Route path="sensor" element={<SensorData />} />
          <Route path="alerts" element={<AlertConfig />} />
          <Route path="add-device" element={<AddDevice />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;