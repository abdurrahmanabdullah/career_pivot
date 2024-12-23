
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import "./dDashboard.css";

const Dashboard = () => {
  return (
    <main className="dashboard">
      {/* Sidebar Section */}
      <section style={{ textAlign: "center" }} className="sidebar">
        <div className="profile-section">
          <div className="profile-picture" />
          <h2 className="profile-name">Name</h2>
          <p className="profile-age">Age</p>
          <p className="profile-designation">Designation</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="content">
        <header className="header">
             <div style={{marginRight:"70%"}} className="header-left">
          <img
              src="/assets/CareerPivot.png" // Replace with your logo path
            alt="CareerPivot iO"
            className="logo"
          />
        </div>
          <nav className="navigation">
            <MenuItem>Home</MenuItem>
            <MenuItem>Dashboard</MenuItem>
            <MenuItem>Blogs</MenuItem>
            <MenuItem>Contact Us</MenuItem>
            <div className="notification-icon">
              <i className="fa fa-bell"></i>
            </div>
          </nav>
        </header>

        <div className="content-section">
          <div style={{ background: "#d7d2db" }} className="card">
            <h3 className="card-title">Professional Summary</h3>
          </div>

          <div style={{ background: "#9587a0" }} className="card">
            <h3 className="card-title">Education</h3>
          </div>

          <div style={{ background: "#d7d2db" }} className="card">
            <h3 className="card-title">Skill</h3>
          </div>

          <div style={{ background: "#9587a0" }} className="card">
            <h3 className="card-title">Projects</h3>
          </div>

          <div style={{ background: "#d7d2db" }} className="card">
            <h3 className="card-title">Employment History</h3>
          </div>

          <div style={{ background: "#9587a0" }} className="card">
            <h3 className="card-title">Courses</h3>
          </div>
        </div>
      </section>

      {/* Job Preference Section (Top-right corner) */}
   
<div>   <div className="job-preference-container">
        <h3 className="job-preference-title">Job Preference</h3>
       
         <button className="job-preference-btn">Continue</button>
      </div>
      

      </div>




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
};

export default Dashboard;
