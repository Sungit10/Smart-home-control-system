import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MobileLogin.css";

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "user@gmail.com" && password === "1234") {
      setError("");
      navigate("/mobile/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="mobile-container">

      {/* App Header */}
      <div className="mobile-header">
        Smart Home
      </div>

      {/* Content Section */}
      <div className="mobile-content">
        <div className="mobile-card">

          <h2>Welcome Back</h2>
          <p className="subtitle">Login to continue</p>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="User Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="error-text">{error}</p>}

            <button type="submit">Login</button>
          </form>

        </div>
      </div>

    </div>
  );
}
