import React from 'react'
import {useSurveyDispatchContext} from '../../contexts/surveyContext';
import {useEditContext} from '../../contexts/editContext';
// CSS imports
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

export default function AddQuestionButton() {
  const editState = useEditContext();
  const dispatch = useSurveyDispatchContext();

  const handleClick = () => {
    dispatch({ type: "add" })
  }

  return (
    <Row className='justify-content-center'>
      {
        editState ? <Button className='add-question-button' variant='secondary' onClick={ () => handleClick() }></Button> : null
      }
    </Row>
  )
}
