import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { SurveyProvider } from './contexts/surveyContext';
import { EditContextProvider } from './contexts/editContext';
import './App.css';
import RegisterPage from './pages/TempRegister';
import LoginPage from './pages/Login';
import StaffPage from './pages/StaffPage';
import CreateSurvey from './pages/CreateSurvey';
import ViewSurvey from './pages/ViewSurvey';
import EditSurvey from './pages/EditSurvey';
import SurveyResponses from './pages/SurveyResponses';
import ViewSurveys from "./pages/ViewSurveys"
import ReviewPage from './pages/TempReviewPage';
import CaptchaPage from "./pages/CaptchaPage"
import { ResponseProvider } from './contexts/responseContext';

function App() {
  return (
    <div className='app'>
        <Router>
          <Routes>
            <Route path='/' element={<Navigate to={'/staff'} />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/staff" element={<StaffPage />} />
            <Route path="/leavereview" element={<ReviewPage />} />
            <Route path="/responses/:surveyID" element={<SurveyResponses />} />
            <Route path='/reCAPTCHA' element={<CaptchaPage />} />
            <Route path="/surveys" element={<ViewSurveys />} />
            <Route path="/surveys" element={<Outlet />}>
              <Route path='/surveys/create' element={<EditContextProvider><SurveyProvider><CreateSurvey /></SurveyProvider></EditContextProvider>} />
              <Route path='/surveys/:surveyId' element={ <EditContextProvider><SurveyProvider><ResponseProvider><ViewSurvey /></ResponseProvider></SurveyProvider></EditContextProvider> } />
              <Route path='/surveys/:surveyId/edit' element={<EditContextProvider><SurveyProvider><EditSurvey /></SurveyProvider></EditContextProvider>} />
            </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
