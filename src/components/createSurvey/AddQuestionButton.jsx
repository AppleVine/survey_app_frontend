import React, {useContext} from 'react'
import {useSurveyDispatchContext} from './surveyContext'
import EditContext from '../../contexts/editContext';

export default function AddQuestionButton() {
  const {edit, setEdit} = useContext(EditContext);
  const dispatch = useSurveyDispatchContext();

  const handleClick = () => {
    dispatch({ type: "add" })
  }

  return (
    <div>
      {
        edit ? <button onClick={ () => handleClick() }>Add Question</button> : null
      }
    </div>
  )
}
