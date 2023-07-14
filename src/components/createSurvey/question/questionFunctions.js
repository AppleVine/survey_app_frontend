const activateEditMode = (target, dispatch) => {
    dispatch({type: "edit", editMode: {[target]: true}})
}

const activateOptionEditMode = (questionId, optionId, state, dispatch) => {
    // Get questionOptions array
    let optionsArray = state.data.questions[questionId].editMode.questionOptions;
    // Update array
    optionsArray[optionId] = true;
    dispatch({type: "edit", editMode: {questionOptions: optionsArray}})
}

module.exports = {
    activateEditMode,
    activateOptionEditMode
}