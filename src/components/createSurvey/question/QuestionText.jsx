import React from 'react'
import { activateEditQuestionMode, deactivateEditQuestionMode } from '../surveyFunctions'

export default function QuestionText({ id, text, state, dispatch }) {
  return (
    <div onClick={() => activateEditQuestionMode(id, "questionText", dispatch)}
    onBlur={() => deactivateEditQuestionMode(id, "questionText", dispatch)}>
      { state.data.questions[id].editMode.questionText ? <input type='text' placeholder={ text } ></input> : text }
    </div>
  )
}
