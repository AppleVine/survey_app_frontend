import React from 'react'
import {useSurveyDispatchContext} from '../../contexts/surveyContext';
import {useEditContext} from '../../contexts/editContext';

export default function AddQuestionButton() {
  const editState = useEditContext();
  const dispatch = useSurveyDispatchContext();

  const handleClick = () => {
    dispatch({ type: "add" })
  }

  return (
    <div>
      {
        editState ? <button onClick={ () => handleClick() }>Add Question</button> : null
      }
    </div>
  )
}
