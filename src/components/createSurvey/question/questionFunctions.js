const activateEditMode = (target, dispatch) => {
    dispatch({type: "edit", editMode: {[target]: true}})
}

const activateOptionEditMode = (index, state, dispatch) => {
    // Get questionOptions array
    let optionsArray = state.editMode.questionOptions;
    // Update array
    optionsArray[index] = true;
    dispatch({type: "edit", editMode: {questionOptions: optionsArray}})
}

module.exports = {
    activateEditMode,
    activateOptionEditMode
}