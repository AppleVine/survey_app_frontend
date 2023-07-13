const initialQuestion = {
    data: {
        questionText: "Insert question text here",
        questionDetails: "Insert question details here",
        questionType: "multipleChoiceRadio",
        questionOptions: ["Enter an option", "Enter an option", "Enter an option"]
    },
    editMode: {
        questionText: false,
        questionDetails: false,
        questionOptions: [false, false, false]
    }
}

const questionReducer = (previousState, instructions) => {

    // stateEditable will be used in all cases
    let stateEditable = null;

    switch (instructions.type) {

        case "save":
            // TODO Perform data validation
            if ( instructions.data.questionText.length < 1 ) {
                console.log("Error: Question must contain at least one character");
                return previousState
            }

            // Create an editable version of previous state, update with new data
            stateEditable = {...previousState, data: instructions.data}
            // Return new state
            return stateEditable;

        case "edit":
            // Toggle edit mode on fields (questionText, questionOptions)
            // Push new data to state
            stateEditable = {...previousState, editMode: instructions.editMode};
            // Return new state
            return stateEditable;

        case "add":
            // Add new option
            // Push new data to state
            stateEditable = {...previousState, data: instructions.data, editMode: instructions.editMode}; // add edit toggle for new option

            // Return new state
            return stateEditable;

        case "delete":
            // Delete an option
            // Copy previous state
            stateEditable = {...previousState}

            // Filter to remove option
            stateEditable.data.questionOptions = stateEditable.data.questionOptions.filter((option, index) => index !== instructions.data.index);
            stateEditable.editMode = stateEditable.editMode.filter((option, index) => index !== instructions.data.index);

            return stateEditable

        default:
            // invalid instructions provided!
            return previousState;
    }
}

module.exports = {
    questionReducer, initialQuestion
}