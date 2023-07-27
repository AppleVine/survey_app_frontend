import React from 'react';
import { useSurveyContext } from '../../contexts/surveyContext';
import {useEditContext} from '../../contexts/editContext';
import { createSurvey } from '../../services/surveyServices';
import { stripEditMode } from './surveyFunctions';

// CSS imports
import Button from 'react-bootstrap/Button';

export default function SaveNewSurveyButton() {
  const state = useSurveyContext();
  const editState = useEditContext();

  const handleSaveChanges = async () => {
    try {
      // Strip editMode data before saving
      const surveyData = stripEditMode(state);
      await createSurvey(surveyData);
    } catch (error) {
      console.error("Error saving survey to the database:", error);
    }
  };

  return (
    <div className='save-changes-button d-flex justify-content-center'>
      {editState ? <Button variant='primary' onClick={() => handleSaveChanges()} >Save Changes</Button> : null}
    </div>
  );
}
