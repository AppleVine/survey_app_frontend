import React from 'react';
import { useEditContext } from '../../../contexts/editContext';
import { useSurveyDispatchContext } from '../../../contexts/surveyContext';

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
    <div className='remove-button position-absolute top-0 end-0' onClick={handleClick}>
    </div>
  )
}
