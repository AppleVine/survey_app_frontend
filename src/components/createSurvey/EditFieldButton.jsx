import React from 'react'

export default function EditFieldButton({ state, dispatch, parent, inputData }) {
  const buttonText = state.editMode[parent] ? "Save" : "Edit";

  // IN PROGRESS - Trying to make this save the text entered in parent container using reducer
  const handleClick = () => {
    if (state.editMode[parent]) {
      dispatch({type: "save", [parent]: inputData })
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
