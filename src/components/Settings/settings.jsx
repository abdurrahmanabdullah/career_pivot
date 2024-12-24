import  { useState } from 'react';
import './settings.css';

const Settings = () => {
  const [reminderNotifications, setReminderNotifications] = useState(true);
  const [newsNotifications, setNewsNotifications] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handlePasswordUpdate = () => {
    if (newPassword === confirmPassword) {
      console.log('Password updated successfully!');
    } else {
      console.log('Passwords do not match.');
    }
  };

  const handleAccountDeletion = () => {
    if (isConfirmed) {
      console.log('Account deletion initiated');
    }
  };

  return (
<div style={{ color: "black" }} className="user-profile">
  <div className="basic-info-container">
    <div style={{marginTop:"0"}} className="basic-info-header">
      <h2>Basic Information</h2>
    </div>
    <div className="profile-section">
      <img
        src="https://dashboard.codeparrot.ai/api/assets/Z2r4rI6CYQNjI8gn"
        alt="Profile"
        width="105"
        height="96"
      />
      <div className="profile-text">
        <h4>Profile Photo</h4>
        <p style={{ marginTop: "0", marginBottom: "0", marginLeft: "2px" }}>
          This will be displayed on your profile
        </p>
      </div>
    </div>
  </div>




{/* <p>Name: John Doe</p>
          <p>Email: john.doe@example.com</p>
          <p>Gender: Male</p>
          <p>Date of Birth: 01/01/1990</p> */}

      <div className="notifications-container">
        <h2>Notifications</h2>
        <div>
          <p>Email Notifications</p>
          <p>Reminders</p>
          <button onClick={() => setReminderNotifications(!reminderNotifications)}>
            {reminderNotifications ? 'Disable' : 'Enable'}
          </button>
        </div>
        <div>
          <p>News</p>
          <button onClick={() => setNewsNotifications(!newsNotifications)}>
            {newsNotifications ? 'Disable' : 'Enable'}
          </button>
        </div>
      </div>

      <div className="social-accounts-container">
        <h2>Social Accounts</h2>
        <div>
          <p>Google: Not Connected</p>
          <button>Connect</button>
        </div>
        <div>
          <p>LinkedIn: Not Connected</p>
          <button>Connect</button>
        </div>
        <div>
          <p>X: Not Connected</p>
          <button>Connect</button>
        </div>
      </div>

      <div className="password-security-container">
        <h2>Password & Security</h2>
        <div>
          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button onClick={handlePasswordUpdate}>Update Password</button>
        </div>
      </div>

      <div className="delete-account-container">
        <h2>Delete Account</h2>
        <div>
          <input
            type="checkbox"
            checked={isConfirmed}
            onChange={() => setIsConfirmed(!isConfirmed)}
          />
          <label>Confirm account deletion</label>
        </div>
        <button onClick={handleAccountDeletion} disabled={!isConfirmed}>
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
