
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import "./dashboard.css";
import Header from "../Header/header"; 
import { NavLink } from 'react-router-dom';
import Footer from "../Footer/footer";
function Dashboard() {
  return (
    <main className="dashboard">
         <Header />
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
      <section className="dcontent">
     
        <div className="dcontent-section">
          <div style={{ background: "#d7d2db" }} className="dcard">
            <h3 className="card-title">Free or pro details</h3>
          </div>

          <div style={{ background: "#9587a0" }} className="dcard">
            <h3 className="card-title">Question Details</h3>
          </div>

          
        </div>
      </section>

  




      {/* Footer Section */}
      <Footer />
    </main>
  );
}

export default Dashboard;
