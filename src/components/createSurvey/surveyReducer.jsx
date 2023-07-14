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

const initialSurvey = {
    data: {
        title: "Insert Survey Title Here",
        description: "Insert survey description here.",
        introduction: "Insert survey intro here.",
        completionMessage: "Insert survey completion message here.",
        makePublic: false,
        questions: [initialQuestion],
    },
    editMode: {
        title: false,
        description: false,
        introduction: false,
        completionMessage: false
    }
}

const surveyReducer = (previousState, instructions) => {

    // stateEditable will be used in all cases
    let stateEditable = null;
    // Index in case of editing a question (React gets mad if I try and initialize this within individual cases)
    let index = null;
    // Ditto
    let fieldToEdit = null;

    switch (instructions.type) {

        case "update":
            // TODO Perform data validation
            if ( instructions.data.title && instructions.data.title.length < 1 ) {
                console.log("Error: Title must contain at least one character");
                return previousState
            }

            // Create an editable version of previous state, update with new data
            stateEditable = {...previousState};
            fieldToEdit = instructions.data.target;
            stateEditable.data[fieldToEdit] = instructions.data.value;
            // Return new state
            return stateEditable;

        case "updateOption":
            //TODO Data validation

            // Create an editable version of previous state, update with new data
            stateEditable = {...previousState}
            let newOption = instructions.data.text;
            let questionId = instructions.data.questionId;
            let optionId = instructions.data.optionId;
            stateEditable.data.questions[questionId].data.questionOptions[optionId] = newOption;
            // Return new state
            return stateEditable;

        case "edit":
            // Toggle edit mode on fields (title, desc, intro, message)
            // Push new data to state
            stateEditable = {...previousState, editMode: instructions.editMode};
            // Return new state
            return stateEditable;

        case "editQuestion":
            // Toggle edit mode on question fields (questionText, questionDetails, questionOptions)
            // Copy current state
            stateEditable = {...previousState};
            // Get index of question to be edited
            index = instructions.data.index;
            // Copy current editMode state of question
            let newEditMode = {...previousState.data.questions[index].editMode};
            // Get the name of the field being edited
            fieldToEdit = Object.keys(instructions.editMode)[0];
            // Update that field
            newEditMode[fieldToEdit] = instructions.editMode[fieldToEdit];
            // Update state with new data
            stateEditable.data.questions[index].editMode = newEditMode;
            // Return new state
            return stateEditable;

        case "add":
            // Add new question to questions array
            stateEditable = {...previousState};
            stateEditable.data.questions.push(initialQuestion)

            // Return new state
            return stateEditable;

        case "addOption":
            // Add new option to multiple choice question
            // Copy current state
            stateEditable = {...previousState};
            // Get index of question to be edited
            index = instructions.data.index;
            // Push new option to options array for that question
            stateEditable.data.questions[index].questionOptions.push("Enter an option");
            // Add new editMode status
            stateEditable.data.questions[index].editMode.questionOptions.push(false);

            return stateEditable;

        case "delete":
            // Delete a question
            // Copy current state
            stateEditable = {...previousState};
            // Remove question from array
            stateEditable.data.questions = stateEditable.data.questions.filter((question, index) => index !== instructions.data.index);

            return stateEditable;

        case "deleteOption":
            // Delete an answer option
            // Copy current state
            stateEditable = {...previousState};
            // Get question index from instructions
            let questionIndex = instructions.data.questionIndex;
            // Remove answer from option array
            stateEditable.data.questions[questionIndex].questionOptions = 
            stateEditable.data.questions[questionIndex].questionOptions.filter((option, index) => index !== instructions.data.optionIndex);

            return stateEditable;

        default:
            // invalid instructions provided!
            return previousState;
    }
}

module.exports = {
    surveyReducer, initialSurvey
}