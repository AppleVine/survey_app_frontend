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

const stripEditMode = (state) => {
    // Clone state data, without including editMode
    let surveyData = structuredClone(state.data);
    // Strip editMode info from questions
    for (let i = 0; i < surveyData.questions.length; i++) {
    surveyData.questions[i] = structuredClone(surveyData.questions[i].data);
    }
    delete surveyData._id
    return surveyData
}

module.exports = {
    activateEditMode,
    deactivateEditMode,
    activateEditQuestionMode,
    deactivateEditQuestionMode,
    saveField,
    saveQuestionField,
    stripEditMode
}