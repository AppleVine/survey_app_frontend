import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/TempRegister';
import LoginPage from './pages/Login';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
