const activateEditMode = (target, dispatch) => {
    dispatch({type: "edit", editMode: {[target]: true}})
}

const activateEditQuestionMode = (index, target, dispatch) => {
    dispatch({type: "editQuestion", data: {index: index}, editMode: {[target]: true}})
}

const deactivateEditQuestionMode = (index, target, dispatch) => {
    dispatch({type: "editQuestion", data: {index: index}, editMode: {[target]: false}})
}

const saveField = (target, value, dispatch) => {
    dispatch({type: "update", data: {target: [target], value: [value]}})
}

const saveToDatabase = (dispatch) => {
    dispatch({type: "saveToDatabase"})
}

module.exports = {
    activateEditMode,
    activateEditQuestionMode,
    deactivateEditQuestionMode,
    saveField,
    saveToDatabase
}