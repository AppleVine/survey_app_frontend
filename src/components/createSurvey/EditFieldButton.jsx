import React from 'react'
import {useSurveyContext, useSurveyDispatchContext} from './surveyContext'
import { activateEditMode, deactivateEditMode } from './surveyFunctions';

export default function EditFieldButton({ parent }) {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();

  const buttonText = state.editMode[parent] ? "Save" : "Edit";

  // Toggle edit mode for parent component when clicked
  const handleClick = () => {
    if (state.editMode[parent]) {
      deactivateEditMode(parent, dispatch);
    } else {
      activateEditMode(parent, dispatch);
    }
  }

  return (
    <div>
      <button onClick={ () => handleClick() }>{ buttonText }</button>
    </div>
  )
}
