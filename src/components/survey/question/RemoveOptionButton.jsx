import React from 'react';
import { useEditContext } from '../../../contexts/editContext';
import { useSurveyDispatchContext } from '../surveyContext';

export default function RemoveOptionButton({ questionId, optionId }) {
    const editState = useEditContext();
    const dispatch = useSurveyDispatchContext();

    // Do not display if viewing survey
    if (!editState) {
        return null
    }

    const handleClick = () => {
        dispatch({ type: "deleteOption", data: {questionId: questionId, optionId: optionId} })
      }

  return (
    <div onClick={handleClick}>
      X
    </div>
  )
}
