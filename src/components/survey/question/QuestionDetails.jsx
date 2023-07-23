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
    if (questionDetails && questionDetails != initialQuestion.data.questionDetails) { // Must be loose equality!
      dispatch({type: "updateQuestion", data: {questionId: id, field: "questionDetails", value: questionDetails}});
    }
    // If removing question details entirely:
    else if (questionDetails === null) {
      dispatch({type: "updateQuestion", data: {questionId: id, field: "questionDetails", value: questionDetails}});
      setEditMode(false);
    }
    // eslint-disable-next-line
  },[questionDetails])

  // If viewing a survey and there are no details, don't display at all
    if (!editState && !questionDetails) {
      return(null)
    }

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
      <div>
        {
        state.data.questions[id].data.questionDetails
        ? 
        <div>{state.data.questions[id].data.questionDetails}
        <button onClick={() => setQuestionDetails(null)}>Remove Question Details</button></div>
        :
        <button onClick={() => setEditMode(true)}>Add Question Details</button>
        }
      </div> }
    </div>
  )
}
