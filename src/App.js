import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/TempRegister';
import LoginPage from './pages/Login';
import StaffPage from './pages/StaffPage';
import SurveyPage from './pages/SurveyPage';
import CreateSurvey from './pages/CreateSurvey';
import SurveyResponses from './pages/SurveyResponses';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/staff" element={<StaffPage />} />
          
          <Route path="/surveys" element={<Outlet />}>
            <Route index element={<SurveyPage />} />
            <Route path='/surveys/create' element={<CreateSurvey />} />
          </Route>
          
          <Route path="/responses/*" element={<Outlet />}>
            <Route index element={<SurveyResponses />} />
            <Route path=":surveyID" element={<SurveyResponses />} />
          </Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
