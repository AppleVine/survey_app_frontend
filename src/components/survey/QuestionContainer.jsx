import React from 'react';
import QuestionText from './question/QuestionText';
import QuestionDetails from './question/QuestionDetails';
import QuestionResponse from './question/QuestionResponse';
import QuestionType from './question/QuestionType';
import RemoveQuestionButton from './RemoveQuestionButton';

export default function QuestionContainer({ index }) {

  return (
    <div>
      <RemoveQuestionButton questionId={index} />
      <QuestionType id={ index } />
      <QuestionText id={ index } />
      <QuestionDetails id={ index } />
      <QuestionResponse id={ index } />
    </div>
  )
}
