import React, { useEffect, useState } from 'react'

export default function QuestionText({ id, questionState, setQuestionState }) {
  const [questionText, setQuestionText] = useState(questionState.data.questionText);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    let newQuestionState = {...questionState}
    newQuestionState.data.questionText = questionText;
    setQuestionState(newQuestionState);
  },[questionText])

  return (
    <div onClick={() => setEditMode(true)}
    onBlur={() => setEditMode(false)}>
      { editMode ?
      <input type='text' placeholder={ questionText } 
      onChange={ (event) => setQuestionText(event.target.value) } ></input> 
      : 
      <span>{ questionText }</span> }
    </div>
  )
}
