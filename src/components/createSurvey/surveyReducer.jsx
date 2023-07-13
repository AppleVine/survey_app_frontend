// For some reason React freaks out if I try to import this from questionReducer
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

    switch (instructions.type) {

        case "save":
            // TODO Perform data validation
            if ( instructions.data.title.length < 1 ) {
                console.log("Error: Title must contain at least one character");
                return previousState
            }

            // Create an editable version of previous state, update with new data
            stateEditable = {...previousState, data: instructions.data}
            // Return new state
            return stateEditable;

        case "edit":
            // Toggle edit mode on fields (title, desc, intro, message)
            // Push new data to state
            stateEditable = {...previousState, editMode: instructions.editMode};
            // Return new state
            return stateEditable;

        case "add":
            // Keep questions array updated with created questions
            // Push new data to state
            stateEditable = {...previousState};

            stateEditable.data.questions.push(initialQuestion)

            // Return new state
            return stateEditable;

        default:
            // invalid instructions provided!
            return previousState;
    }
}

module.exports = {
    surveyReducer, initialSurvey
}