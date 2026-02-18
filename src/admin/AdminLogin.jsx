import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulated delay
    setTimeout(() => {
      if (email.trim() === "admin@gmail.com" && password === "1234") {
        // We no longer save to localStorage here.
        // The "session" now only lives in the app's current memory.
        navigate("/admin/dashboard");
      } else {
        setError("Invalid email or password.");
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="admin-login-container">
      <div className="login-card">
        <header className="login-header">
          <div className="admin-logo">🏠</div>
          <h2>SmartHome Admin</h2>
          <p>Please log in to continue</p>
        </header>

        <form onSubmit={handleLogin} noValidate>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Verifying..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}