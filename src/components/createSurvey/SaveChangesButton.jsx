import React from 'react';
import { useSurveyContext } from './surveyContext';
import { createSurvey } from '../../services/surveyServices';

export default function SaveChangesButton() {
  const surveyData = useSurveyContext();
  console.log(surveyData)

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
      <button onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
}
