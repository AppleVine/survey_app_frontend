import React from 'react';
import QuestionText from './question/QuestionText';
import QuestionDetails from './question/QuestionDetails';
import QuestionResponse from './question/QuestionResponse';

export default function QuestionContainer({ question, state, dispatch }) {

  let questionId = state.data.questions.indexOf(question);

  return (
    <div>
      <QuestionText text={ question.data.questionText } id={ questionId } state={ state } dispatch={ dispatch } />
      <QuestionDetails details={ question.data.questionDetails } state={ state } dispatch={ dispatch } />
      <QuestionResponse id={ questionId } state={ state } dispatch={ dispatch } />
    </div>
  )
}
