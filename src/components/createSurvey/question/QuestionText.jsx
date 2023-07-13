import React from 'react'
import EditFieldButton from '../EditFieldButton'
import { activateEditMode } from './questionFunctions'

export default function QuestionText({ id, text, state, dispatch }) {
  return (
    <div onClick={() => activateEditMode("questionText", dispatch)}>
      { state.data.questions[id].editMode.questionText ? <input type='text' placeholder={ text } ></input> : text }
    </div>
  )
}
