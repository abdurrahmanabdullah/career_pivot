import React from 'react';
import './ResumeForm.css'; // Add a separate CSS file for styles

const ResumeForm = () => {
  return (
    <div className="resume-form">
    
   
      <form style={{color:"black"}} className="form-container">
          
      <img  
              src="/assets/CareerPivot.png" // Replace with your logo path
            alt="CareerPivot iO"
            className="resumelogo"
          />
        <h2>Personal details</h2>
        <div className="form-columns">
          <div className="form-column-left">
            <div className="form-field">
              <label>First name</label>
              <input type="text" placeholder="First name" />
            </div>
            <div className="form-field">
              <label>E-mail</label>
              <input type="email" placeholder="E-mail" />
            </div>
            <div className="form-field">
              <label>Address</label>
              <input type="text" placeholder="Address" />
            </div>
            <div className="form-field">
              <label>Country</label>
              <input type="text" placeholder="Country" />
            </div>
          </div>
          <div className="form-column-right">
            <div className="form-field">
              <label>Last name</label>
              <input type="text" placeholder="Last name" />
            </div>
            <div className="form-field">
              <label>Phone</label>
              <input type="tel" placeholder="Phone" />
            </div>
            <div className="form-field">
              <label>City</label>
              <input type="text" placeholder="City" />
            </div>
            <div className="form-field">
              <label>Postal Code</label>
              <input type="text" placeholder="Postal Code" />
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Professional Summary</h2>
          <textarea placeholder=""></textarea>
        </div>
        <div className="section">
          <h2>Education</h2>
          <p>A Varied education</p>
          <button type="button">+ Add education</button>
        </div>
        <div className="section">
          <h2>Websites & Social Links</h2>
          <p>You can add links to Websites, your portfolio,Linked In profile or personal website</p>
          <button type="button">+ Add Link</button>
        </div>
        <div className="section">
          <h2>Skills</h2>
          <p>Make sure they match the key skills mentioned in the job listing</p>
          <button type="button">+ Add Skill</button>
        </div>
        <div className="section">
          <h2>Courses</h2>
          <p>add</p>
          <button type="button">+ Add Courses</button>
        </div>
        <div className="section">
          <h2>Projects</h2>
          <p>add</p>
          <button type="button">+ Add Project</button>
        </div>
        <div className="section">
          <h2>Employment History</h2>
          <p>add</p>
          <button type="button">+ Add Internship</button>
        </div>
        <div className="section">
            <p>add line</p>
          <h2>Job Preference</h2>
          <button type="button">+ Add</button>
        </div>
        <button className="continue-btn" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
};

export default ResumeForm;
