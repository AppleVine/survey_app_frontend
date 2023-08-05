import React, { useEffect, useState } from 'react'
import { useSurveyContext, useSurveyDispatchContext } from '../../../contexts/surveyContext';
import { initialQuestion } from '../../../contexts/surveyReducer';
import { useEditContext } from '../../../contexts/editContext';

// CSS imports
import Button from 'react-bootstrap/Button';

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
    // eslint-disable-next-line
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
  if (!editState && !state.data.questions[id].data.questionDetails) {
    return(null)
  }
  // If viewing a survey, don't include editing buttons
  else if (!editState) {
    return(
      <div>
        {state.data.questions[id].data.questionDetails}
      </div>
    )
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
      <input className='edit-input' type='text' placeholder={ state.data.questions[id].data.questionDetails }
      onChange={(event) => setQuestionDetails(event.target.value)}
      onKeyDown={ (event) => event.key === "Enter" ? setEditMode(false): null } 
      ></input> 
      : 
      <div>
        {
        state.data.questions[id].data.questionDetails
        ? 
        <div className='question-details'>
          <div className='question-details-edit'>{state.data.questions[id].data.questionDetails}</div>
          <Button className='question-details-button' variant='secondary' onClick={() => setQuestionDetails(null)} >Remove Question Details</Button>
        </div>
        :
        <Button className='question-details-button' variant='secondary' onClick={() => setEditMode(true)} >Add Question Details</Button>
        }
      </div> }
    </div>
  )
}
