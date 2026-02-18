import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AdminLogin from "./admin/AdminLogin";
import AdminLayout from "./admin/AdminLayout";
import UserLogin from "./mobile/UserLogin";
import UserDashboard from "./mobile/UserDashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main selector page */}
        <Route path="/" element={<MainPage />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminLayout />} />

        {/* Mobile/User Routes */}
        <Route path="/mobile" element={<UserLogin />} />
        <Route path="/mobile/dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
