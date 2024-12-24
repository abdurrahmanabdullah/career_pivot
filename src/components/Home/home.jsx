import  { useState } from "react";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import "./home.css";
import { NavLink } from 'react-router-dom';
import Header from "../Header/header"; 
import Footer from "../Footer/footer";
function Home() {
const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

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
      <Header />

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
     <Footer/>
    </main>
  );
}

export default Home;
