import React, { useState } from 'react';
import './loginPage.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="title">Log in</h2>
        <p style={{ color: 'black' }}>
          New to Design Space? <a href="#">Sign up for free</a>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="email" style={{ color: 'black' }}>
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
          </div>

          <div className="input-container">
            <label htmlFor="password" style={{ color: 'black' }}>
              Password
            </label>
             
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'} // Toggle input type based on state
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
              />
           <i
  className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'} eye-icon`} // Toggle between eye and eye-slash icon
  onClick={togglePasswordVisibility}
/>

            </div>
          </div>

          <div className="forgot-password-container">
  <a href="#">Forgot password?</a>
  <button type="submit" className="button">
    Log in
  </button>
</div>

        </form>
<div className="social-buttons-container">
  <button className="social-button google-button">
    <i className="fab fa-google"></i> Google
  </button>
  <button className="social-button linkedin-button">
    <i className="fab fa-linkedin"></i> LinkedIn
  </button>
</div>


      </div>
    </div>
  );
};

export default Login;
