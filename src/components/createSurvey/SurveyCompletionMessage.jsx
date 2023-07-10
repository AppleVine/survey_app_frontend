import React, { useState } from 'react'
import EditFieldButton from './EditFieldButton'

export default function SurveyCompletionMessage() {
  const [editMode, setEditMode] = useState(false);

  const handleClick = () => {
    setEditMode(!editMode)
  }
  
  return (
    <div>
      { editMode? 
        <textarea id='survey-completion-message' name='survey-completion-message' placeholder='Insert Survey Completion Message Here'></textarea>
        :
        <p>Insert Survey Completion Message Here</p> 
      }
      <EditFieldButton handleClick={ handleClick } editMode={ editMode } />
    </div>
  )
}
