import React from 'react';
import {useSurveyContext, useSurveyDispatchContext} from './surveyContext'
import QuestionText from './question/QuestionText';
import QuestionDetails from './question/QuestionDetails';
import QuestionResponse from './question/QuestionResponse';

export default function QuestionContainer({ question, index }) {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();

  return (
    <div>
      <QuestionText id={ index } />
      <QuestionDetails id={ index } />
      <QuestionResponse type={ question.data.questionType } id={ index } state={ state } dispatch={ dispatch } />
    </div>
  )
}
