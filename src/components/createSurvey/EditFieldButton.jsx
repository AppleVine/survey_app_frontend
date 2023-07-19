import React from 'react'
import {useSurveyContext, useSurveyDispatchContext} from './surveyContext'
import { activateEditMode, deactivateEditMode } from './surveyFunctions';
import { useEditContext } from '../../contexts/editContext';

export default function EditFieldButton({ parent }) {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();
  const editState = useEditContext();

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
      { editState ? <button onClick={ () => handleClick() }>{ buttonText }</button>: null}
    </div>
  )
}
