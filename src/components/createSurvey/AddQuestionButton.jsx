import React from 'react'
import {useSurveyDispatchContext} from './surveyContext'

export default function AddQuestionButton() {
const dispatch = useSurveyDispatchContext();

  const handleClick = () => {
    dispatch({ type: "add" })
  }

  return (
    <div>
      <button onClick={ () => handleClick() }>Add Question</button>
    </div>
  )
}
