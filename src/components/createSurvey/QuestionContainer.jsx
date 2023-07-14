import React from 'react';
import {useSurveyContext, useSurveyDispatchContext} from './surveyContext'
import QuestionText from './question/QuestionText';
import QuestionDetails from './question/QuestionDetails';
import QuestionResponse from './question/QuestionResponse';

export default function QuestionContainer({ question }) {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();

  let questionId = state.data.questions.indexOf(question);

  return (
    <div>
      <QuestionText text={ question.data.questionText } id={ questionId } state={ state } dispatch={ dispatch } />
      <QuestionDetails details={ question.data.questionDetails } id={ questionId } state={ state } dispatch={ dispatch } />
      <QuestionResponse type={ question.data.questionType } id={ questionId } state={ state } dispatch={ dispatch } />
    </div>
  )
}
