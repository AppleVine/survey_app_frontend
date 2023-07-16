import React from 'react'
import { useSurveyContext, useSurveyDispatchContext } from '../surveyContext';
import { activateEditQuestionMode, deactivateEditQuestionMode, saveQuestionField } from '../surveyFunctions'

export default function QuestionText({ id }) {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();

  return (
    <div onClick={() => activateEditQuestionMode(id, "questionText", dispatch)}
    onBlur={() => deactivateEditQuestionMode(id, "questionText", dispatch)}>
      { state.data.questions[id].editMode.questionText ?
      <input type='text' placeholder={ state.data.questions[id].data.questionText } 
      onChange={ (event) => saveQuestionField(id, "questionText", event.target.value, dispatch) } ></input> 
      : 
      <span>{ state.data.questions[id].data.questionText }</span> }
    </div>
  )
}
