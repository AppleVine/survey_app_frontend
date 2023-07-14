const activateEditMode = (target, dispatch) => {
    dispatch({type: "edit", editMode: {[target]: true}})
}

const activateOptionEditMode = (questionId, optionId, state, dispatch) => {
    // Get questionOptions array
    let optionsArray = state.data.questions[questionId].editMode.questionOptions;
    // Update array
    for (let option of optionsArray) {
        optionsArray[option] = false;
    }
    optionsArray[optionId] = true;
    dispatch({type: "edit", editMode: {questionOptions: optionsArray}})
}

const deactivateOptionEditMode = (questionId, optionId, state, dispatch) => {
        // Get questionOptions array
        let optionsArray = state.data.questions[questionId].editMode.questionOptions;
        // Update array
        optionsArray[optionId] = false;
        dispatch({type: "edit", editMode: {questionOptions: optionsArray}})
}

const updateOption = (questionId, optionId, value, dispatch) => {
    dispatch({type: "updateOption", data: {questionId: [questionId], optionId: [optionId], text: [value]}})
}

module.exports = {
    activateEditMode,
    activateOptionEditMode,
    deactivateOptionEditMode,
    updateOption
}