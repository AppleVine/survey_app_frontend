import React, { useEffect, useState } from 'react'

export default function QuestionDetails({ id, questionState, setQuestionState}) {
  const [questionDetails, setQuestionDetails] = useState(questionState.data.questionDetails);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    let newQuestionState = {...questionState}
    newQuestionState.data.questionDetails = questionDetails;
    setQuestionState(newQuestionState);
  },[questionDetails])

  return (
    <div onClick={() => setEditMode(true)}
    onBlur={() => setEditMode(false)}>
      { editMode ? 
      <input type='text' placeholder={ questionDetails }
      onChange={(event) => setQuestionDetails(event.target.value)} ></input> 
      : 
      <span>{questionDetails}</span> }
    </div>
  )
}
