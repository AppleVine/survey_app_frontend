import React, { useState } from 'react'
import EditFieldButton from './EditFieldButton'

export default function SurveyIntroText() {
  const [editMode, setEditMode] = useState(false);

  const handleClick = () => {
    setEditMode(!editMode)
  }

  return (
    <div>
      { editMode? 
        <textarea id='survey-intro-text' name='survey-intro-text' placeholder='Insert Survey Introduction Here'></textarea>
        :
        <p>Insert Survey Introduction Here</p> 
      }
      <EditFieldButton handleClick={ handleClick } editMode={ editMode } />
    </div>
  )
}
