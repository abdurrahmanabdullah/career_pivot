import './landingPage.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import Footer from "../Footer/footer";
import { NavLink } from 'react-router-dom';
const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="header">
        <div className="header-leftt">
           <img  
              src="/assets/CareerPivot.png" // Replace with your logo path
            alt="CareerPivot iO"
            className="landinglogo"
          />
        </div>
        <div className="header-center"></div>
        <div style={{marginRight:"120px"}} className="header-right">
        <NavLink to="/blogs" className={({ isActive }) => isActive ? "active-link" : ""}>Blogs</NavLink>
          <a href="#" className="header-link">Pricing</a>
          <Link to="/login">
          <button className="header-btn login-btn">Log in</button> {/* Link to Login page */}
        </Link>
         <Link to="/signup"> <button className="header-btn signup-btn">Sign up</button></Link>
        </div>
      </header>

      {/* Line below header */}
      <div className="header-line"></div>

      {/* Main Content */}
      <main className="main-content flex-grow flex flex-col items-start p-10">
  <div className="text-section flex-1">
    <h1 className="main-text" style={{textAlign:"justify",marginTop:"30%"}} >
      A successful career isn’t built overnight. It’s crafted with the right guidance, consistent persistence, and the essential tools needed to thrive. Your dream job is out there, and we’re here to prepare you every step of the way. Start your career journey with us, and together, we’ll create a path toward your future.
    </h1>
  </div>
  <div className="button-section mt-4"> {/* Added margin-top to separate the button from text */}
    <button className="register-btn"  >Register</button>
  </div>
</main>


      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default LandingPage;
