import React, {useState} from 'react';
import {useSurveyDispatchContext} from '../../contexts/surveyContext';
import { saveField } from './surveyFunctions';

// CSS imports
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function MakePublicToggle() {
  const dispatch = useSurveyDispatchContext();
  const [isChecked, setIsChecked] = useState(true); 
  // This seems unintuitive, but setting the initial state to true results in correct behavior

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    saveField("makePublic", isChecked, dispatch);
  }

  return (
      <ToggleButton variant='secondary' id="make-public-toggle" type='checkbox' checked={isChecked} value="1" 
      onChange={ () => {handleCheckboxChange()}}>
        {isChecked? "Make Private" : "Make Public"}
      </ToggleButton>
  )
}
