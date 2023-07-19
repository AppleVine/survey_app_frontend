import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSurveyDispatchContext } from '../components/createSurvey/surveyContext';
import EditSurveyContainer from '../components/createSurvey/EditSurveyContainer';
import { getSurvey } from '../services/surveyServices';
import { checkLoginAndRedirect } from '../services/authServices';

export default function EditSurvey() {

  // Redirect to login page if not logged in
  useEffect(() => {
    checkLoginAndRedirect();
  }, []);

  // Get survey id from url
  let surveyId = useParams();
  // Load data from db
  let surveyData = getSurvey(surveyId);
  // Update survey context with data
  const dispatch = useSurveyDispatchContext();

  dispatch({data: surveyData});

  return (
    <div>
        <EditSurveyContainer  />
    </div>
  )
}