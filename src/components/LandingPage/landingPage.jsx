import './landingPage.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const CareerPivotLanding = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <img
            src="/path-to-logo.png" // Replace with your logo path
            alt="CareerPivot iO"
            className="logo"
          />
        </div>
        <div className="header-center"></div>
        <div className="header-right">
          <a href="#" className="header-link">Blogs</a>
          <a href="#" className="header-link">Pricing</a>
          <Link to="/login">
          <button className="header-btn login-btn">Log in</button> {/* Link to Login page */}
        </Link>
          <button className="header-btn signup-btn">Sign up</button>
        </div>
      </header>

      {/* Line below header */}
      <div className="header-line"></div>

      {/* Main Content */}
      <main className="main-content flex-grow flex flex-col items-start p-10">
  <div className="text-section flex-1">
    <h1 className="main-text" style={{textAlign:"justify"}} >
      A successful career isn’t built overnight. It’s crafted with the right guidance, consistent persistence, and the essential tools needed to thrive. Your dream job is out there, and we’re here to prepare you every step of the way. Start your career journey with us, and together, we’ll create a path toward your future.
    </h1>
  </div>
  <div className="button-section mt-4"> {/* Added margin-top to separate the button from text */}
    <button className="register-btn"  >Register</button>
  </div>
</main>


      {/* Footer */}
      <footer className="footer">
        <span className="footer-left">© All rights reserved.</span>
        <div className="footer-right">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default CareerPivotLanding;
