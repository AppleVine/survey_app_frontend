import React, {useState, useEffect, useCallback} from 'react';
import {useSurveyContext, useSurveyDispatchContext} from './surveyContext';
import QuestionText from './question/QuestionText';
import QuestionDetails from './question/QuestionDetails';
import QuestionResponse from './question/QuestionResponse';
import QuestionType from './question/QuestionType';

export default function QuestionContainer({ question, index }) {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();

  question.index = index;
  const [questionState, setQuestionState] = useState(question);

  const updateQuestionState = useCallback(() => {
    dispatch({type: "update", data: {questionId: index, questionState: questionState}})
  }, [questionState, dispatch, index])

  useEffect(() => {
    updateQuestionState();
  },[questionState, updateQuestionState])

  return (
    <div>
      <QuestionType id={ question.index } questionState={questionState} setQuestionState={setQuestionState} />
      <QuestionText id={ question.index } questionState={questionState} setQuestionState={setQuestionState} />
      <QuestionDetails id={ question.index } questionState={questionState} setQuestionState={setQuestionState} />
      <QuestionResponse type={ questionState.data.questionType } id={ question.index } 
      questionState={questionState} setQuestionState={setQuestionState} />
    </div>
  )
}
