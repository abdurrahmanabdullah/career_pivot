import React from "react";
import "./footer.css"; // Import the styles for the footer

function Footer() {
  return (
    <footer className="footer">
      <span className="footer-left">© All rights reserved.</span>
      <div className="footer-right">
        <a href="#" className="footer-link">Privacy Policy</a>
        <a href="#" className="footer-link">Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;
