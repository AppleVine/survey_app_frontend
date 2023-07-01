import React from 'react';
import QuestionText from './question/QuestionText';
import QuestionDetails from './question/QuestionDetails';
import QuestionResponse from './question/QuestionResponse';

export default function QuestionContainer() {
  return (
    <div>
      <QuestionText />
      <QuestionDetails />
      <QuestionResponse />
    </div>
  )
}
