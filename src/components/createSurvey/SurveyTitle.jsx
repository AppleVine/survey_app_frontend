import React from 'react'
import EditFieldButton from './EditFieldButton'

export default function SurveyTitle({ state, dispatch }) {

  const handleChange = (value) => {
    dispatch({type: "save", data: {title: value}})
  }

  return (
    <div>
      { state.editMode.title ? 
        <input type='text' id='survey-title' name='survey-title' placeholder='Insert Survey Title Here' onChange={event => handleChange(event.target.value)}></input>
        :
        <h1>{state.data.title}</h1> 
      }
      <EditFieldButton state={ state } dispatch={ dispatch } parent={ "title" } />
    </div>
  )
}
