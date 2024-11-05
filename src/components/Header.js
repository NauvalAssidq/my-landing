import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ darkMode, toggleDarkMode }) {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen((prevNavState) => !prevNavState);
  };

  return (
    <header className={`header ${darkMode ? "dark" : "light"}`}>
      <div className="logo">
        <h1>WebinAja</h1>
      </div>

      <button className="nav-toggle-button" onClick={toggleNav}>
        <span className={`burger-icon ${navOpen ? "open" : ""}`}></span>
      </button>

      <div className={`nav-container ${navOpen ? "open" : ""}`}>
        <nav className={`nav ${darkMode ? "dark" : "light"}`}>
          <Link to="/home" className="nav-link">
            Home
          </Link>
          <Link to="/details" className="nav-link">
            Details
          </Link>
          <Link to="/register" className="nav-link">
            Register for Competition
          </Link>
          <button className="toggle-button" onClick={toggleDarkMode}>
            {darkMode ? "🌙" : "☀️"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
