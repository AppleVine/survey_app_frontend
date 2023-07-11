import React from 'react'
import EditFieldButton from './EditFieldButton'

export default function SurveyCompletionMessage({ state, dispatch }) {
  
  return (
    <div>
      { state.editMode.completionMessage ? 
        <textarea id='survey-completion-message' name='survey-completion-message' placeholder='Insert Survey Completion Message Here'></textarea>
        :
        <p>Insert Survey Completion Message Here</p> 
      }
      <EditFieldButton state={ state } dispatch={ dispatch } parent={ "completionMessage" } />
    </div>
  )
}
