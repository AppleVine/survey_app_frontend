import React from 'react'
import {useSurveyContext, useSurveyDispatchContext} from './surveyContext'

export default function EditFieldButton({ parent }) {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();

  const buttonText = state.editMode[parent] ? "Save" : "Edit";

  // Toggle edit mode for parent component when clicked
  const handleClick = () => {
    if (state.editMode[parent]) {
      dispatch({type: "edit", editMode: { [parent]: false }})
    } else {
      dispatch({type: "edit", editMode: { [parent]: true }})
    }
  }

  return (
    <div>
      <button onClick={ () => handleClick() }>{ buttonText }</button>
    </div>
  )
}
