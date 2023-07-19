import React from 'react'
import {useSurveyContext, useSurveyDispatchContext} from './surveyContext'
import EditFieldButton from './EditFieldButton'
import { saveField } from './surveyFunctions'

export default function SurveyCompletionMessage() {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();

  return (
    <div>
      { state.editMode.completionMessage ? 
        <textarea id='survey-completion-message' name='survey-completion-message' placeholder={ state.data.completionMessage } 
        onChange={ (event) => saveField("completionMessage", event.target.value, dispatch) } 
        ></textarea>
        :
        <p>{ state.data.completionMessage }</p> 
      }
      <EditFieldButton state={ state } dispatch={ dispatch } parent={ "completionMessage" } />
    </div>
  )
}
