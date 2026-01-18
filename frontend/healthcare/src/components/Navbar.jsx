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
          <Link to="/health-topics">Health Topics</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login" className="login-btn">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
