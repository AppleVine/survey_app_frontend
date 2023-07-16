// const activateEditMode = (target, dispatch) => {
//     dispatch({type: "edit", editMode: {[target]: true}})
// }

const activateOptionEditMode = (questionId, optionId, options, dispatch) => {
    // Update array
    for (let option of options) {
        options[option] = false;
    }
    options[optionId] = true;
    dispatch({type: "edit", data: {questionId: questionId, options: options}})
}

const deactivateOptionEditMode = (questionId, optionId, options, dispatch) => {
        // Update array
        options[optionId] = false;
        dispatch({type: "edit", data: {questionId: questionId, options: options}})
}

const updateOption = (questionId, optionId, value, dispatch) => {
    dispatch({type: "updateOption", data: {questionId: questionId, optionId: optionId, text: value}})
}

module.exports = {
    // activateEditMode,
    activateOptionEditMode,
    deactivateOptionEditMode,
    updateOption
}