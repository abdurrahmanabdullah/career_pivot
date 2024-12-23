import MenuItem from "@mui/material/MenuItem";
import  { useState } from "react";
// import { SettingMenu } from "../SettingMenu/SettingMenu";
// import careerpivotLogo from "./careerpivot-250-150-px-02.png";

import "./blog.css";

export const Blogs = () => { const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <main className="blogs">
      <header className="main-heading-menu">
        <div style={{marginInline:"3%"}} className="header-menu">
            <img  
              src="/assets/CareerPivot.png" // Replace with your logo path
            alt="CareerPivot iO"
            className="bloglogo"
          />
          <nav style={{color:"black"}} className="navigation">
            <MenuItem>Home</MenuItem>
            <MenuItem>Dashboard</MenuItem>
            <MenuItem>Blogs</MenuItem>
            <MenuItem>Contact Us</MenuItem>

            <MenuItem>Contact Us</MenuItem>
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
        
        </div>
      </header>

      <section className="content">
        <div className="job-preference">
       
          <div className="blog-card">
            <h3 className="blog-card-title">Blog</h3>
          </div>
        </div>

       

        <div className="blog-section">
          <article className="blog-card">
            <h3 className="blog-card-title">Blog</h3>
          </article>
          <article className="blog-card">
            <h3 className="blog-card-title">Blog</h3>
          </article>
          <article className="blog-card">
            <h3 className="blog-card-title">Blog</h3>
          </article>
        </div>


        
      </section>
        {/* Footer */}
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
export default Blogs;