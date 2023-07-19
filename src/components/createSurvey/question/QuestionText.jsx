import React, { useEffect, useState } from 'react'
import { useSurveyContext, useSurveyDispatchContext } from '../surveyContext';
import { initialQuestion } from '../surveyReducer';

export default function QuestionText({ id }) {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();
  const [enteredText, setEnteredText] = useState("");
  const [questionText, setQuestionText] = useState(state.data.questions[id].data.questionText);
  const [editMode, setEditMode] = useState(false);
  console.log(state.data.questions[id].data.questionText)
  console.log(questionText);

  // Trigger rerender on state change
  useEffect(() => {},[state])

  // Set question text on re-render (Do not combine with above function- triggers infinite-rerender!)
  useEffect(() => {
    setQuestionText(state.data.questions[id].data.questionText)
    // eslint-disable-next-line
  },[])

  // Set question text when entered text changes
  useEffect(() => {
    // If entered text is not empty string
    if (enteredText) {
      setQuestionText(enteredText);
    };
    // eslint-disable-next-line
  },[enteredText])

  // Update global state when question edited
  useEffect(() => {
    // Check that question text is not empty string or default data
    if (questionText && questionText !== initialQuestion.data.questionText) {
      dispatch({type: "updateQuestion", data: {questionId: id, field: "questionText", value: questionText}});
    }
    // eslint-disable-next-line
  },[questionText])

  return (
    <div onClick={() => setEditMode(true)}
    onBlur={() => setEditMode(false)}>
      { editMode ?
      <input type='text' placeholder={ questionText } 
      onChange={ (event) => setEnteredText(event.target.value) }
      onKeyDown={ (event) => event.key === "Enter" ? setEditMode(false): null }
      ></input> 
      : 
      <span>{ questionText }</span> }
    </div>
  )
}
