import React from 'react';
import { useParams } from 'react-router-dom';
import { useSurveyDispatchContext } from '../components/createSurvey/surveyContext';
import EditSurveyContainer from '../components/createSurvey/EditSurveyContainer';
import { getSurvey } from '../services/surveyServices';

export default function EditSurvey() {
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