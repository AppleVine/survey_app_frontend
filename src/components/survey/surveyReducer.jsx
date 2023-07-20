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
        _id: null,
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

//TODO Refactor to remove question functionality

const surveyReducer = (previousState, instructions) => {

    // stateEditable will be used in all cases
    let stateEditable = null;
    // Index in case of editing a question (React gets mad if I try and initialize this within individual cases)
    let questionId = null;
    // Ditto
    let fieldToEdit = null;

    switch (instructions.type) {

        case "loadSurvey":
            // Load survey from db
            stateEditable = {...previousState, data: instructions.data}
            // Add edit mode for all fields
            stateEditable.editMode = initialSurvey.editMode;
            for (let question of stateEditable.data.questions) {
                question.editMode = initialQuestion.editMode;
                // Make sure that each option has an editMode toggle
                for (let i = 0; i < question.data.questionOptions.length; i++) {
                    question.editMode.questionOptions[i] = false;
                }
            }
            return stateEditable;

        case "loadDraft":
            // Load from local storage
            stateEditable = instructions.data;
            return stateEditable;

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

        case "updateQuestion":
            //TODO Data validation
            questionId = instructions.data.questionId;
            fieldToEdit = instructions.data.field;
            stateEditable = {...previousState};
            stateEditable.data.questions[questionId].data[fieldToEdit] = instructions.data.value;

            return stateEditable

        case "edit":
            // Toggle edit mode on fields (title, desc, intro, message)
            // Push new data to state
            stateEditable = {...previousState};
            // Change the editMode options for the target field
            stateEditable.editMode[instructions.data.target] = instructions.data.editMode;
            // Return new state
            return stateEditable;

        case "editQuestion":
            // Toggle edit mode on question fields (questionText, questionDetails, questionOptions)
            // Copy current state
            stateEditable = {...previousState};
            // Get index of question to be edited
            questionId = instructions.data.index;
            // Copy current editMode state of question
            let newEditMode = stateEditable.data.questions[questionId].editMode;
            // Set all to false
            for (let field in newEditMode) {
                if (typeof field === Boolean) {
                    newEditMode[field] = false;
                }
            }
            // Get the name of the field being edited
            fieldToEdit = instructions.data.target;
            // Update that field
            newEditMode[fieldToEdit] = instructions.data.editMode;
            // Update state with new data
            stateEditable.data.questions[questionId].editMode = newEditMode;
            // Return new state
            return stateEditable;

        case "add":
            // Add new question to questions array
            stateEditable = {...previousState};
            let newQuestion = structuredClone(initialQuestion)
            stateEditable.data.questions.push(newQuestion)

            // Return new state
            return stateEditable;

        case "addOption":
            // Add new option to multiple choice question
            // Copy current state
            stateEditable = {...previousState};
            // Get index of question to be edited
            questionId = instructions.data.index;
            // Push new option to options array for that question
            stateEditable.data.questions[questionId].data.questionOptions.push("Enter an option");
            // Add new editMode status
            stateEditable.data.questions[questionId].editMode.questionOptions.push(false);

            return stateEditable;

        case "delete":
            // Delete a question
            // Copy current state
            stateEditable = {...previousState};
            questionId = instructions.data.questionId
            // Remove question from array
            stateEditable.data.questions = stateEditable.data.questions.filter((question, index) => index !== questionId);

            return stateEditable;

        case "deleteOption":
            // Delete an answer option
            // Copy current state
            stateEditable = {...previousState};
            // Get question index from instructions
            questionId = instructions.data.questionId;
            let optionId = instructions.data.optionId;
            console.log(`Deleting option ${optionId} from ${questionId}`);
            // Remove answer from option array
            stateEditable.data.questions[questionId].data.questionOptions = 
            stateEditable.data.questions[questionId].data.questionOptions.filter((option, index) => index !== optionId);

            return stateEditable;

        default:
            // invalid instructions provided!
            return previousState;
    }
}

module.exports = {
    surveyReducer, initialSurvey, initialQuestion
}