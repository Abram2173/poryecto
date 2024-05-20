import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Organizador from './components/Organizador';
import Admin from './components/Admin';
import JuezPerfil from './components/Juez';
import UserProfile from './components/Perfil';

import './App.css';
import PasswordResetRequest from './components/PasswordResetRequest';
import PasswordReset from './components/PasswordReset';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/register" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/organizador" element={<Organizador />} />
          <Route path="/juez" element={<JuezPerfil />} />
          <Route path="/perfil/:userId" element={<UserProfile />} />
          <Route path="/password-reset-request" element={<PasswordResetRequest />} />
          <Route path="/password-reset/:token" element={<PasswordReset />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
