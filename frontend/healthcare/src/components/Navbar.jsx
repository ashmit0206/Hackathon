import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="nav-container">
        <h1 className="logo">HealthCare Portal</h1>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <a href="/#topics">Health Topics</a>
          <a href="/#services">Services</a>
          <a href="/#contact">Contact</a>

          <Link
            to="/login"
            className={`login-btn ${
              location.pathname === "/login" ? "active" : ""
            }`}
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
