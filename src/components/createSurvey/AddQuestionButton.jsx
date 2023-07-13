import React from 'react'

export default function AddQuestionButton({ state, dispatch }) {

  const handleClick = () => {
    dispatch({ type: "add" })
  }

  return (
    <div>
      <button onClick={ () => handleClick() }>Add Question</button>
    </div>
  )
}
