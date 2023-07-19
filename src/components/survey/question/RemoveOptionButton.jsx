import React from 'react'

export default function RemoveOptionButton({ questionId, optionId }) {
    const editState = useEditContext();
    const dispatch = useSurveyDispatchContext();

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
