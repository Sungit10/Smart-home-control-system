import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="main-page">
      <h1>Smart Home Ecosystem</h1>
      <p>Select Portal</p>

      <div className="portal-buttons">
        <button onClick={() => navigate("/admin")}>
          Admin Portal
        </button>

        <button onClick={() => navigate("/mobile")}>
          User Mobile App
        </button>
      </div>
    </div>
  );
}
