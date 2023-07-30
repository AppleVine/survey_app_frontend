export const activateOptionEditMode = (questionId, optionId, options, dispatch) => {
    // Update array
    for (let option of options) {
        options[option] = false;
    }
    options[optionId] = true;
    dispatch({type: "edit", data: {questionId: questionId, options: options}})
}

export const deactivateOptionEditMode = (questionId, optionId, options, dispatch) => {
        // Update array
        options[optionId] = false;
        dispatch({type: "edit", data: {questionId: questionId, options: options}})
}

export const updateOption = (questionId, optionId, value, dispatch) => {
    dispatch({type: "updateOption", data: {questionId: questionId, optionId: optionId, text: value}})
}

export const addAlert= (ref) => {
    const container = ref.current; // corresponding DOM node
    const className = "highlight"
    if (container.classList && !container.classList.contains(className)) {
        container.classList.add(className);
      }
   } 

 export const removeAlert= (ref) => {
   const container = ref.current; // corresponding DOM node
   const className = "highlight"
   if (container.classList && container.classList.contains(className)) {
       container.classList.remove(className);
     }
   }

// module.exports = {
//     activateOptionEditMode,
//     deactivateOptionEditMode,
//     updateOption
// }