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

const addAlert= (ref) => {
    const container = ref.current; // corresponding DOM node
    const className = "highlight"
    if (!container.classList.contains(className)) {
        container.classList.add(className);
      }
   } 
 const removeAlert= (ref) => {
   const container = ref.current; // corresponding DOM node
   const className = "highlight"
   if (container.classList.contains(className)) {
       container.classList.remove(className);
     }
   }

module.exports = {
    activateOptionEditMode,
    deactivateOptionEditMode,
    updateOption,
    addAlert,
    removeAlert
}