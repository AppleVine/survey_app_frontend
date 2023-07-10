import React, { useState } from 'react'
import EditFieldButton from './EditFieldButton'

export default function SurveyTitle() {
  const [editMode, setEditMode] = useState(false);

  const handleClick = () => {
    setEditMode(!editMode)
  }

  return (
    <div>
      { editMode? 
        <input type='text' id='survey-title' name='survey-title' placeholder='Insert Survey Title Here'></input>
        :
        <h1>Insert Survey Title Here</h1> 
      }
      <EditFieldButton handleClick={ handleClick } editMode={ editMode } />
    </div>
  )
}
