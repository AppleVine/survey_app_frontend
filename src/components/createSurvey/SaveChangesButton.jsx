import React from 'react'
import { useSurveyDispatchContext } from './surveyContext';
import { saveToDatabase } from './surveyFunctions';

export default function SaveChangesButton() {
  const dispatch = useSurveyDispatchContext();

  return (
    <div>
      <button onClick={ () => {saveToDatabase(dispatch)} }>Save Changes</button>
    </div>
  )
}
