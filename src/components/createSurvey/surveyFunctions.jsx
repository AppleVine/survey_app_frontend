const activateEditMode = (target, dispatch) => {
    dispatch({type: "edit", editMode: {[target]: true}})
}

const saveField = (target, value, dispatch) => {
    dispatch({type: "update", data: {[target]: [value]}})
}

module.exports = {
    activateEditMode,
    saveField
}