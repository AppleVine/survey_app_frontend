import React, { useEffect, useState } from 'react'
import { useSurveyContext, useSurveyDispatchContext } from '../surveyContext';
import { initialQuestion } from '../surveyReducer';
import { useEditContext } from '../../../contexts/editContext';

export default function QuestionDetails({ id }) {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();
  const editState = useEditContext();
  const [questionDetails, setQuestionDetails] = useState("");
  const [editMode, setEditMode] = useState(false);

  // Trigger rerender on state change
  useEffect(() => {},[state])

  // Update global state when question edited
  useEffect(() => {
    // Check that question text is not empty string or default data
    if (questionDetails && questionDetails != initialQuestion.data.questionDetails) {  // Must be loose equality!
      dispatch({type: "updateQuestion", data: {questionId: id, field: "questionDetails", value: questionDetails}});
    }
    // eslint-disable-next-line
  },[questionDetails])

  return (
    <div onClick={() => {
      // Only allow editing if in an editable survey
      if (editState) {
        setEditMode(true)
      }
    }}
    onBlur={() => setEditMode(false)}>
      { editMode ? 
      <input type='text' placeholder={ state.data.questions[id].data.questionDetails }
      onChange={(event) => setQuestionDetails(event.target.value)}
      onKeyDown={ (event) => event.key === "Enter" ? setEditMode(false): null } 
      ></input> 
      : 
      <span>{state.data.questions[id].data.questionDetails}</span> }
    </div>
  )
}
