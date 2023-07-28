import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSurveyContext } from '../../contexts/surveyContext';
import {useEditContext} from '../../contexts/editContext';
import { createSurvey } from '../../services/surveyServices';
import { stripEditMode } from './surveyFunctions';

// CSS imports
import Button from 'react-bootstrap/Button';

export default function SaveNewSurveyButton() {
  const state = useSurveyContext();
  const editState = useEditContext();
  // Prevent multiple form submissions
  const [submitted, setSubmitted] = useState(false);
  // Redirect
  const navigate = useNavigate();

  const handleSaveChanges = async () => {
    if (submitted === false) {
      try {
        // Strip editMode data before saving
        const surveyData = stripEditMode(state);
        await createSurvey(surveyData)
        .then((response) => {
          console.log(response);
          setSubmitted(true);
          return response
        })
        // Prevent multiple submissions
        .then(setSubmitted(true))
        // Redirect to view survey page
        .then((response) => navigate(`/surveys/${response.id}`))
      } catch (error) {
        console.error("Error saving survey to the database:", error);
      }
    }
  };

  return (
    <div className='save-changes-button d-flex justify-content-center'>
      {editState ? <Button variant='primary' onClick={() => handleSaveChanges()} >Save Changes</Button> : null}
    </div>
  );
}
