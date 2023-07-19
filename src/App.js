import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/TempRegister';
import LoginPage from './pages/Login';
import StaffPage from './pages/StaffPage';
import SurveyPage from './pages/SurveyPage';
import CreateSurvey from './pages/CreateSurvey';
import ViewSurvey from './pages/ViewSurvey';
import EditSurvey from './pages/EditSurvey';
import { SurveyProvider } from './components/survey/surveyContext';
import { EditContextProvider } from './contexts/editContext';

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
              <Route path='/surveys/create' element={<EditContextProvider><SurveyProvider><CreateSurvey /></SurveyProvider></EditContextProvider>} />
              <Route path='/surveys/:surveyId' element={ <EditContextProvider><SurveyProvider><ViewSurvey /></SurveyProvider></EditContextProvider> } />
              <Route path='/surveys/:surveyId/edit' element={<EditContextProvider><SurveyProvider><EditSurvey /></SurveyProvider></EditContextProvider>} />
            </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
