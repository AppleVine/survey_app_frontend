import React from 'react'
import EditFieldButton from './EditFieldButton'

export default function SurveyTitle({ state, dispatch }) {

  return (
    <div>
      { state.editMode.title ? 
        <input type='text' id='survey-title' name='survey-title' placeholder='Insert Survey Title Here'></input>
        :
        <h1>Insert Survey Title Here</h1> 
      }
      <EditFieldButton state={ state } dispatch={ dispatch } parent={ "title" } />
    </div>
  )
}
