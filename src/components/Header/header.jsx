// Header.jsx
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import MenuItem from "@mui/material/MenuItem";
import "./Header.css"; // Import the styles for the header

function Header() {
  const [isToggled, setIsToggled] = useState(false);
  
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <header className="header">
      <div className="header-left">
        <img
          src="/assets/CareerPivot.png" // Replace with your logo path
          alt="CareerPivot iO"
          className="logo" />
      </div>
      <nav className="navigationn">
      <NavLink to="/home" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active-link" : ""}>Dashboard</NavLink>
        <NavLink to="/blogs" className={({ isActive }) => isActive ? "active-link" : ""}>Blogs</NavLink>
        <NavLink to="/contactus" className={({ isActive }) => isActive ? "active-link" : ""}>Contact Us</NavLink>
  
        <div className="notification-icon">
          <i className="fa fa-bell"></i>
        </div>
      </nav>
      {/* Toggle Button */}
      <div
        className={`toggle-container ${isToggled ? "toggled" : ""}`}
        onClick={handleToggle}
      >
        <div className="toggle-circle"></div>
        <div className="toggle-lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
