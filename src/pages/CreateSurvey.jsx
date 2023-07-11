import React, { useReducer } from 'react';
import { surveyReducer, initialSurvey } from '../components/createSurvey/surveyReducer';
import SurveyTitle from '../components/createSurvey/SurveyTitle';
import SurveyIntroText from '../components/createSurvey/SurveyIntroText';
import SurveyQuestionsContainer from '../components/createSurvey/SurveyQuestionsContainer';
import SurveyCompletionMessage from '../components/createSurvey/SurveyCompletionMessage';
import SaveChangesButton from '../components/createSurvey/SaveChangesButton';

export default function CreateSurvey() {
  const [state, dispatch] = useReducer(surveyReducer, initialSurvey);

  return (
    <div>
      <SurveyTitle state={ state } dispatch={ dispatch } />
      <SurveyIntroText state={ state } dispatch={ dispatch } />
      <SurveyQuestionsContainer state={ state } dispatch={ dispatch } />
      <SurveyCompletionMessage state={ state } dispatch={ dispatch } />
      <SaveChangesButton state={ state } dispatch={ dispatch } />
    </div>
  )
}