import React, {useContext} from 'react';
import { useSurveyContext } from './surveyContext';
import EditContext from '../../contexts/editContext';
import { createSurvey } from '../../services/surveyServices';

export default function SaveChangesButton() {
  const surveyData = useSurveyContext();
  const {edit, setEdit} = useContext(EditContext);

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
      {edit ? <button onClick={handleSaveChanges}>Save Changes</button> : null}
    </div>
  );
}
