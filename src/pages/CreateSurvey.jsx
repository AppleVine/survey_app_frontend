import React, {useEffect} from 'react';
import EditSurveyContainer from '../components/survey/EditSurveyContainer';
import { checkLoginAndRedirect } from '../services/authServices';
import SaveNewSurveyButton from '../components/survey/SaveNewSurveyButton';

// Style import
import './CreateEditSurvey.css';

export default function CreateSurvey() {

  // Redirect to login page if not logged in
  useEffect(() => {
    checkLoginAndRedirect();
  }, []);

  return (
    <div>
      <EditSurveyContainer />
      <SaveNewSurveyButton />
    </div>
  )
}