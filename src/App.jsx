import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import Login from './components/loginPage/loginPage';
import GoogleLoginPage from './components/loginPage/googleLoginPage';
import SignUpPage from './components/signupPage/signup';
import DashBoard from './components/DashBoard/dashboard';
import Blog from './components/Blog/blog';
import Header from './components/Header/header';
//import LandingPage from './components/LandingPage/landingPage';
import ContactPage from './components/Contact/contact';
import Settings from './components/Settings/settings';
// import ResumeForm from './components/ResumeForm/resumeForm';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
             <Route path="/" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/google-login" element={<GoogleLoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Header" element={<Header />} />
 <Route path="/contactus" element={<ContactPage />} />
          
      </Routes>
    </Router>
  );
}

export default App;
