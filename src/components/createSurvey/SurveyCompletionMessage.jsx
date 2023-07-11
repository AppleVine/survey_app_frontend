import React from 'react'
import EditFieldButton from './EditFieldButton'

export default function SurveyCompletionMessage({ state, dispatch }) {
  
  const handleChange = (value) => {
    dispatch({type: "save", data: {completionMessage: value}})
  }

  return (
    <div>
      { state.editMode.completionMessage ? 
        <textarea id='survey-completion-message' name='survey-completion-message' placeholder={ state.data.completionMessage } onChange={ () => handleChange() }></textarea>
        :
        <p>{ state.data.completionMessage }</p> 
      }
      <EditFieldButton state={ state } dispatch={ dispatch } parent={ "completionMessage" } />
    </div>
  )
}
