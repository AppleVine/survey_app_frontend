import React, {useEffect} from 'react';
import EditSurveyContainer from '../components/createSurvey/EditSurveyContainer';
import { checkLoginAndRedirect } from '../services/authServices';
import SaveNewSurveyButton from '../components/createSurvey/SaveNewSurveyButton';

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