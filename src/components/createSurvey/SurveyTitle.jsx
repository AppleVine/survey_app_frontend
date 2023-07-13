import React from 'react'
import EditFieldButton from './EditFieldButton'
import { saveField } from './surveyFunctions'

export default function SurveyTitle({ state, dispatch }) {

  return (
    <div>
      { state.editMode.title ? 
        <input type='text' id='survey-title' name='survey-title' placeholder='Insert Survey Title Here' 
        onChange={ (event) => saveField("introduction", event.target.value, dispatch) }></input>
        :
        <h1>{state.data.title}</h1> 
      }
      <EditFieldButton state={ state } dispatch={ dispatch } parent={ "title" } />
    </div>
  )
}
