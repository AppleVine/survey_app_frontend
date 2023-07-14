import React from 'react'
import { activateEditQuestionMode, deactivateEditQuestionMode } from '../surveyFunctions'

export default function QuestionDetails({ id, details, state, dispatch }) {
  return (
    <div onClick={() => activateEditQuestionMode(id, "questionDetails", dispatch)}
    onBlur={() => deactivateEditQuestionMode(id, "questionDetails", dispatch)}>
      { state.data.questions[id].editMode.questionDetails ? 
      <input type='text' placeholder={ details } ></input> 
      : 
      details }
    </div>
  )
}
