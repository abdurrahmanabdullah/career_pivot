import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/landingPage';
import Login from './components/loginPage/loginPage'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
         <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
