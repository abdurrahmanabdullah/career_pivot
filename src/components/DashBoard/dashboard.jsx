
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import "./dashboard.css";
import { NavLink } from 'react-router-dom';
function Dashboard() {
  return (
    <main className="dashboard">
      {/* Sidebar Section */}
      <section style={{marginLeft:"3%"}} className="sidebar">
        <div className="profile-section">
          <div className="profile-picture" />
          <h2 className="profile-name">Name</h2>
          <p className="profile-age">Age</p>
          <p className="profile-designation">Designation</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="content">
        <header style={{marginRight:"45%"}} className="header">
          <div className="header-left">
            <img
              src="/assets/CareerPivot.png" // Replace with your logo path
              alt="CareerPivot iO"
              className="logo" />
          </div>
          <nav style={{marginLeft:"45%"}} className="navigation">
            <MenuItem>Home</MenuItem>
            
            <NavLink to="/dashboard" activeClassName="active-link">Dashboard</NavLink>
            <MenuItem>Blogs</MenuItem>
            <MenuItem>Contact Us</MenuItem>
            <div className="notification-icon">
              <i className="fa fa-bell"></i>
            </div>
          </nav>
        </header>

        <div className="content-section">
          <div style={{ background: "#d7d2db" }} className="card">
            <h3 className="card-title">Free or pro details</h3>
          </div>

          <div style={{ background: "#9587a0" }} className="card">
            <h3 className="card-title">Question Details</h3>
          </div>

          
        </div>
      </section>

  




      {/* Footer Section */}
      <footer className="footer">
        <span className="footer-left">© All rights reserved.</span>
        <div className="footer-right">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
        </div>
      </footer>
    </main>
  );
}

export default Dashboard;
