import React from 'react';
import {useSurveyContext, useSurveyDispatchContext} from '../../contexts/surveyContext';
import { saveField } from './surveyFunctions';

// CSS imports
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function MakePublicToggle() {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();

  const handleCheckboxChange = () => {
    saveField("makePublic", !state.data.makePublic, dispatch);
  }

  return (
      <ToggleButton variant='secondary' id="make-public-toggle" type='checkbox' checked={state.data.makePublic} value="1" 
      onChange={ () => {handleCheckboxChange()}}>
        {state.data.makePublic? "Make Private" : "Make Public"}
      </ToggleButton>
  )
}
