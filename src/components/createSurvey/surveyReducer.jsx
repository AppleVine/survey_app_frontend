const initialSurvey = {
    data: {
        title: "Insert Survey Title Here",
        description: "Insert survey description here.",
        introduction: "Insert survey intro here.",
        completionMessage: "Insert survey completion message here.",
        questions: [],
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
            // Create an editable version of previous state
            // stateEditable = {...previousState}
            // Remove edit mode from all other fields
            // for (let field in stateEditable.editMode) {
            //     if (field) {
            //         field = false;
            //     }
            // }
            // Push new data to state
            stateEditable = {...previousState, editMode: instructions.editMode};
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