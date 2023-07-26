import React from 'react'
import {useSurveyContext, useSurveyDispatchContext} from '../../contexts/surveyContext';
import { activateEditMode, deactivateEditMode } from './surveyFunctions';
import { useEditContext } from '../../contexts/editContext';
// CSS imports
import Button from 'react-bootstrap/Button';

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
    <div className='inline edit-field-button'>
      { editState ? <Button variant="secondary" size="sm" onClick={ () => handleClick() } >{ buttonText }</Button> : null}
    </div>
  )
}
