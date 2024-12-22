import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/landingPage';
import Login from './components/loginPage/loginPage'
import GoogleLoginPage from './components/loginPage/googleLoginPage'
import SignUpPage from './components/signupPage/signup'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
         <Route path="/login" element={<Login />} />
         <Route path="/google-login" element={<GoogleLoginPage />} /> {/* New route */}
         <Route path="/signup" element={<SignUpPage />} /> {/* New route */}
      </Routes>
    </Router>
  );
}

export default App;
