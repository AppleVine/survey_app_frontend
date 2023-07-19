import React from 'react';
import { useSurveyDispatchContext } from './surveyContext';
import { useEditContext } from '../../contexts/editContext';

export default function RemoveQuestionButton({ questionId }) {
    const editState = useEditContext();
    const dispatch = useSurveyDispatchContext();

    if (!editState) {
        return null
    }

    const handleClick = () => {
        dispatch({ type: "delete", data: {questionId: questionId} })
      }

  return (
    <div onClick={() => handleClick()}>
      X
    </div>
  )
}
