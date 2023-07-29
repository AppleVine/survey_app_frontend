import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSurveyContext } from '../../contexts/surveyContext';
import {useEditContext} from '../../contexts/editContext';
import { updateSurvey } from '../../services/surveyServices';
import { useParams } from 'react-router-dom';
import { stripEditMode } from './surveyFunctions';

// CSS imports
import Button from 'react-bootstrap/Button';

export default function SaveEditedSurveyButton() {
  const {surveyId} = useParams();
  const state = useSurveyContext();
  const editState = useEditContext();
  // Prevent multiple form submissions
  const [submitted, setSubmitted] = useState(false);
  // Redirect
  const navigate = useNavigate();

  const handleSaveChanges = async () => {
    if (submitted === false) {
      // Prevent multiple submissions
      setSubmitted(true)
      try {
        // Strip editMode state before saving
        const surveyData = stripEditMode(state);
        await updateSurvey(surveyId, surveyData)
        .then(() => {
          // Remove saved draft from storage
          localStorage.removeItem("survey-draft");
        })
        // Redirect to view survey page
        .then(navigate(`/surveys/${surveyId}`))
      } catch (error) {
        console.error("Error saving survey to the database:", error); // TODO further error handling?
        // Make sure that the user can attempt to submit again
        setSubmitted(false);
      }
    }
  };

  return (
    <div className='save-changes-button d-flex justify-content-center'>
      {editState ? <Button variant='primary' onClick={() => handleSaveChanges()} >Save Changes</Button> : null}
    </div>
  );
}
