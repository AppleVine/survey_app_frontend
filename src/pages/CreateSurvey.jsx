import React from 'react';
import SurveyTitle from '../components/createSurvey/SurveyTitle';
import SurveyIntroText from '../components/createSurvey/SurveyIntroText';
import SurveyQuestionsContainer from '../components/createSurvey/SurveyQuestionsContainer';
import SurveyCompletionMessage from '../components/createSurvey/SurveyCompletionMessage';
import SaveChangesButton from '../components/createSurvey/SaveChangesButton';

export default function createSurvey() {
  return (
    <div>
      <SurveyTitle />
      <SurveyIntroText />
      <SurveyQuestionsContainer />
      <SurveyCompletionMessage />
      <SaveChangesButton />
    </div>
  )
}
