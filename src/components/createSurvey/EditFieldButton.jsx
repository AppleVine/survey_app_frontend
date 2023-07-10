import React from 'react'

export default function EditFieldButton({ editMode, handleClick }) {
  const buttonText = editMode ? "Save" : "Edit";

  return (
    <div>
      <button onClick={ handleClick }>{ buttonText }</button>
    </div>
  )
}
