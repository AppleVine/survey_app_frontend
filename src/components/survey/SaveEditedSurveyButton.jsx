import React from 'react';
import { useSurveyContext } from '../../contexts/surveyContext';
import {useEditContext} from '../../contexts/editContext';
import { updateSurvey } from '../../services/surveyServices';
import { useParams } from 'react-router-dom';
import { stripEditMode } from './surveyFunctions';

export default function SaveEditedSurveyButton() {
  const {surveyId} = useParams();
  const state = useSurveyContext();
  const editState = useEditContext();

  const handleSaveChanges = async () => {
    try {
      // Strip editMode state before saving
      const surveyData = stripEditMode(state);
      await updateSurvey(surveyId, surveyData);
    } catch (error) {
      console.error("Error saving survey to the database:", error); // TODO further error handling?
    }
  };

  return (
    <div>
      {editState ? <button onClick={handleSaveChanges}>Save Changes</button> : null}
    </div>
  );
}
