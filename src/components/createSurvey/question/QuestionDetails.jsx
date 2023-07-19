import React, { useEffect, useState } from 'react'
import { useSurveyContext, useSurveyDispatchContext } from '../surveyContext';
import { initialQuestion } from '../surveyReducer';

export default function QuestionDetails({ id }) {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();
  const [enteredText, setEnteredText] = useState("");
  const [questionDetails, setQuestionDetails] = useState("");
  const [editMode, setEditMode] = useState(false);

  // Trigger rerender on state change
  useEffect(() => {},[state])

  // Set question details on re-render (Do not combine with above function- triggers infinite-rerender!)
  useEffect(() => {
    setQuestionDetails(state.data.questions[id].data.questionDetails)
    // eslint-disable-next-line
  },[])

  useEffect(() => {
    // If entered text is not empty string
    if (enteredText) {
      setQuestionDetails(enteredText);
    };
  },[enteredText])

  // Update global state when question edited
  useEffect(() => {
    // Check that question text is not empty string or default data
    if (questionDetails && questionDetails !== initialQuestion.data.questionDetails) {
      dispatch({type: "updateQuestion", data: {questionId: id, field: "questionDetails", value: questionDetails}});
    }
    // eslint-disable-next-line
  },[questionDetails])

  return (
    <div onClick={() => setEditMode(true)}
    onBlur={() => setEditMode(false)}>
      { editMode ? 
      <input type='text' placeholder={ questionDetails }
      onChange={(event) => setEnteredText(event.target.value)}
      onKeyDown={ (event) => event.key === "Enter" ? setEditMode(false): null } 
      ></input> 
      : 
      <span>{questionDetails}</span> }
    </div>
  )
}
