import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import Login from './components/loginPage/loginPage';
import GoogleLoginPage from './components/loginPage/googleLoginPage';
import SignUpPage from './components/signupPage/signup';
import DashBoard from './components/DashBoard/dashboard';
import Blog from './components/Blog/blog';
// import LandingPage from './components/LandingPage/landingPage';
// import ResumeForm from './components/ResumeForm/resumeForm';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/google-login" element={<GoogleLoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
