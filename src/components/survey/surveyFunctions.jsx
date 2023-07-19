const activateEditMode = (target, dispatch) => {
    dispatch({type: "edit", data: {target: target, editMode: true}})
}

const deactivateEditMode = (target, dispatch) => {
    dispatch({type: "edit", data: {target: target, editMode: false}})
}

const activateEditQuestionMode = (index, target, dispatch) => {
    dispatch({type: "editQuestion", data: {index: index, target: target, editMode: true}})
}

const deactivateEditQuestionMode = (index, target, dispatch) => {
    dispatch({type: "editQuestion", data: {index: index, target: target, editMode: false}})
}

const saveField = (target, value, dispatch) => {
    dispatch({type: "update", data: {target: target, value: value}})
}

const saveQuestionField = (id, target, value, dispatch) => {
    dispatch({type: "update", data: {questionId: id, target: target, value: value}})
}

const saveToDatabase = (dispatch) => {
    dispatch({type: "saveToDatabase"})
}

module.exports = {
    activateEditMode,
    deactivateEditMode,
    activateEditQuestionMode,
    deactivateEditQuestionMode,
    saveField,
    saveQuestionField,
    saveToDatabase
}