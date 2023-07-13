import React, {useReducer} from 'react';
import QuestionText from './question/QuestionText';
import QuestionDetails from './question/QuestionDetails';
import QuestionResponse from './question/QuestionResponse';
import { initialQuestion, questionReducer } from './question/questionReducer';

export default function QuestionContainer({ question }) {
  const [questionState, questionDispatch] = useReducer(questionReducer, initialQuestion);

  return (
    <div>
      <QuestionText text={ question.data.questionText } questionState={ questionState } questionDispatch={ questionDispatch } />
      <QuestionDetails details={ question.data.questionDetails } questionState={ questionState } questionDispatch={ questionDispatch } />
      <QuestionResponse questionState={ questionState } questionDispatch={ questionDispatch } />
    </div>
  )
}
