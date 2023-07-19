import React, { useEffect, useState } from 'react'
import { useSurveyContext, useSurveyDispatchContext } from '../surveyContext';
import { initialQuestion } from '../surveyReducer';
import { useEditContext } from '../../../contexts/editContext';

export default function QuestionText({ id }) {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();
  const editState = useEditContext();
  const [enteredText, setEnteredText] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [editMode, setEditMode] = useState(false);

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
  },[enteredText])

  // Update global state when question edited
  useEffect(() => {
    // Check that question text is not empty string or default data
    if (questionText && questionText != initialQuestion.data.questionText) {  // Must be loose equality!
      dispatch({type: "updateQuestion", data: {questionId: id, field: "questionText", value: questionText}});
    }
    // eslint-disable-next-line
  },[questionText])

  return (
    <div onClick={() => {
      // Only allow editing if in an editable survey
      if (editState) {
        setEditMode(true)
      }
    }}
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
