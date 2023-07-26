import React from 'react'
import {useSurveyDispatchContext} from '../../contexts/surveyContext';
import {useEditContext} from '../../contexts/editContext';
// CSS imports
import Button from 'react-bootstrap/Button';

export default function AddQuestionButton() {
  const editState = useEditContext();
  const dispatch = useSurveyDispatchContext();

  const handleClick = () => {
    dispatch({ type: "add" })
  }

  return (
    <div>
      {
        editState ? <Button variant='secondary' onClick={ () => handleClick() }>Add Question</Button> : null
      }
    </div>
  )
}
