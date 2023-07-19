import React from 'react';
import { useSurveyContext } from './surveyContext';
import {useEditContext} from '../../contexts/editContext';
import { updateSurvey } from '../../services/surveyServices';
import { useParams } from 'react-router-dom';

export default function SaveEditedSurveyButton() {
  const {surveyId} = useParams();
  const surveyData = useSurveyContext();
  const editState = useEditContext();

  const handleSaveChanges = async () => {
    try {
      await updateSurvey(surveyId, surveyData);
    } catch (error) {
      console.error("Error saving survey to the database:", error);
      // TODO Handle the error if needed
    }
  };

  return (
    <div>
      {editState ? <button onClick={handleSaveChanges}>Save Changes</button> : null}
    </div>
  );
}
