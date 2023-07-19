import React from 'react'

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
    <div onClick={handleClick}>
      X
    </div>
  )
}
