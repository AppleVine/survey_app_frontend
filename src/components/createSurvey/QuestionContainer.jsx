import React from 'react';
import QuestionText from './question/QuestionText';
import QuestionDetails from './question/QuestionDetails';
import QuestionResponse from './question/QuestionResponse';

export default function QuestionContainer({ question, index }) {

  return (
    <div>
      <QuestionText id={ index } />
      <QuestionDetails id={ index } />
      <QuestionResponse type={ question.data.questionType } id={ index } />
    </div>
  )
}
