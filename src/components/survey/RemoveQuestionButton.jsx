import React from 'react';
import { useSurveyDispatchContext } from '../../contexts/surveyContext';
import { useEditContext } from '../../contexts/editContext';

export default function RemoveQuestionButton({ questionId }) {
    const editState = useEditContext();
    const dispatch = useSurveyDispatchContext();

    // Do not display if viewing survey
    if (!editState) {
        return null
    }

    const handleClick = () => {
        dispatch({ type: "delete", data: {questionId: questionId} })
      }

  return (
    <div className='remove-button position-absolute top-0 end-0' onClick={() => handleClick()}>
    </div>
  )
}
