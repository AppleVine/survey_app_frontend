import React from 'react';
import { useSurveyContext } from './surveyContext';
import {useEditContext} from '../../contexts/editContext';
import { createSurvey } from '../../services/surveyServices';

export default function SaveChangesButton() {
  const surveyData = useSurveyContext();
  const editState = useEditContext();

  const handleSaveChanges = async () => {
    try {
      await createSurvey(surveyData);
    } catch (error) {
      console.error("Error saving survey to the database:", error);
      // Handle the error if needed
    }
  };

  return (
    <div>
      {editState ? <button onClick={handleSaveChanges}>Save Changes</button> : null}
    </div>
  );
}
