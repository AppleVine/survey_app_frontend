import React from 'react';
import { useSurveyContext } from './surveyContext';
import {useEditContext} from '../../contexts/editContext';
import { createSurvey } from '../../services/surveyServices';
import { stripEditMode } from './surveyFunctions';

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
    <div>
      {editState ? <button onClick={handleSaveChanges}>Save Changes</button> : null}
    </div>
  );
}
