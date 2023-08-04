import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSurveyContext } from '../../contexts/surveyContext';
import {useEditContext} from '../../contexts/editContext';
import { createSurvey } from '../../services/surveyServices';
import { stripEditMode } from './surveyFunctions';

// CSS imports
import Button from 'react-bootstrap/Button';
// import { set } from 'js-cookie';

export default function SaveNewSurveyButton() {
  const state = useSurveyContext();
  const editState = useEditContext();
  // Prevent multiple form submissions
  const [submitted, setSubmitted] = useState(false);
  // Redirect
  const navigate = useNavigate();

  const handleSaveChanges = async () => {
    if (submitted === false) {
      // Disable further submissions
      setSubmitted(true);
      try {
        // Strip editMode data before saving
        const surveyData = stripEditMode(state);
        const response = await createSurvey(surveyData); // Save the response in a variable
        // Remove saved draft from storage
        localStorage.removeItem("survey-draft");
        // Redirect to view survey using the ID from the response
        navigate(`/surveys/${response.id}`);
      } catch (error) {
        if (error.status === 401) { // Check the status of the error response
          // If the response is 401 Unauthorized, redirect to login page
          window.location.href = '/login'; // Change this to the appropriate login URL
        } else {
          // Re-enable submission button
          setSubmitted(false);
          console.error("Error saving survey to the database:", error);
        }
      }
    }
  };

  return (
    <div className='save-changes-button d-flex justify-content-center'>
      {editState ? <Button variant='primary' onClick={() => handleSaveChanges()} >Save Changes</Button> : null}
    </div>
  );
}
