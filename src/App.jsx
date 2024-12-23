import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import Login from './components/loginPage/loginPage';
import GoogleLoginPage from './components/loginPage/googleLoginPage';
import SignUpPage from './components/signupPage/signup';

// import ResumeForm from './components/ResumeForm/resumeForm';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/google-login" element={<GoogleLoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
