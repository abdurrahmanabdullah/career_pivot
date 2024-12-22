import React from 'react';
import './signup.css';  // Import the CSS file

const SignupPage = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="flex-container">
          {/* Left Column */}
          <div className="column left-column">
            <button className="linkedin">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/LinkedIn_icon.svg" alt="LinkedIn" className="w-5 h-5" />
              <span>Continue with LinkedIn</span>
            </button>
            <button className="google">
              <span>Continue with Google</span>
            </button>
          </div>

          {/* Middle Column */}
          <div className="column middle-column">
            <div className="separator">
              <div className="line"></div>
              <span className="text-gray-600">OR</span>
              <div className="line"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="column right-column">
            <h2>Create an Account</h2>
            <form className="space-y-4">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm  Password</label>
                <input type="password" id="confirm-password" name="confirm-password" />
              </div>
              <div className="checkbox-group">
                <input type="checkbox" id="terms" name="terms" />
                <label htmlFor="terms">
                  By creating an account, I agree to our <a href="#" className="text-blue-600">Terms of use</a> and <a href="#" className="text-blue-600">Privacy Policy</a>
                </label>
              </div>
              <button type="submit" className="submit-btn">Create Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
