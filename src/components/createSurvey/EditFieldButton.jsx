import React from 'react'

export default function EditFieldButton({ state, dispatch, parent }) {
  const buttonText = state.editMode[parent] ? "Save" : "Edit";

  // Toggle edit mode for parent component when clicked
  const handleClick = () => {
    if (state.editMode[parent]) {
      dispatch({type: "edit", editMode: { [parent]: false }})
    } else {
      dispatch({type: "edit", editMode: { [parent]: true }})
    }
  }

  return (
    <div>
      <button onClick={ () => handleClick() }>{ buttonText }</button>
    </div>
  )
}
