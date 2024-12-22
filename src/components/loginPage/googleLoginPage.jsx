import React from "react";
import "./loginpage.css";

function GoogleLoginPage() {
  return (
    <div className="google-login-container">
      <div className="google-login-card">
        {/* Header Section */}
        <div className="google-login-header">
          <div className="google-header-left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google Logo"
              className="google-logo"
            />
            <h2 className="google-login-text">Log in with Google</h2>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="google-divider" />

        {/* Main Content */}
        <div className="google-login-content">
          {/* Left Section */}
          <div className="google-content-left">
            <h2 className="google-content-title">Choose an account</h2>
            <h5 className="google-content-subtitle">
              to continue to CareerPivot IO
            </h5>
          </div>

          {/* Right Section */}
          <div className="google-content-right">
            {/* First Profile Row */}
            <div className="google-profile">
              <div className="account-avatar"></div>
              <p className="account-email">Name  <br></br>--------@gmail.com</p>
            </div>

            {/* Divider Line */}
            <hr className="google-divider" />

            {/* Second Profile Row */}
            <div className="google-profile">
              <div className="account-avatar"></div>
              <p className="account-email"> Name  <br></br>--------@gmail.com</p>
            </div>
            
            {/* Divider Line */}
            <hr className="google-divider" />
          </div>
        </div>
   {/* Divider Line */}

        {/* Bottom Divider Line */}
      </div>
    </div>
  );
}

export default GoogleLoginPage;
