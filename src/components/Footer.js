import React from "react";
import "./Footer.css";

function Footer({ darkMode }) {
  return (
    <footer className={`footer ${darkMode ? "dark" : ""}`}>
      <p>© 2024 ArmWrestler by Nauval. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
