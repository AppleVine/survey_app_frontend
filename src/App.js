import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/TempRegister';
import LoginPage from './pages/Login';
import StaffPage from './pages/StaffPage';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/staff" element={<StaffPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
