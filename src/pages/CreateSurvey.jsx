import React from 'react';
import { SurveyProvider } from '../components/createSurvey/surveyContext';
import SurveyContainer from '../components/createSurvey/SurveyContainer';

export default function CreateSurvey() {

  return (
    <div>
      <SurveyProvider>
        <SurveyContainer />
      </SurveyProvider>
    </div>
  )
}