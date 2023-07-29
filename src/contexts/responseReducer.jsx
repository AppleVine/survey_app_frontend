export const initialResponse = {
    survey_id: null,
    answers: []
}

export const responseReducer = (previousState, instructions) => {

    // stateEditable will be used in all cases
    let stateEditable = null;

    switch (instructions.type) {

        case "load":
            // Load survey id into state and generate an answer array of the correct length
            // Copy state
            stateEditable = {...previousState}
            stateEditable.survey_id = instructions.data.surveyId;
            for (let i = 0; i < instructions.data.noOfQuestions; i++) {
                // If the question has options, set them all to false(unselected)
                if (instructions.data.noOfOptions[i]) {
                    stateEditable.answers[i] = [];
                    for (let j = 0; j < instructions.data.noOfOptions[i]; j++) {
                        stateEditable.answers[i][j] = false;
                    }
                } else {
                    // Else just set the answer for that question to null
                    stateEditable.answers[i] = null;
                }
            }
            return stateEditable
            
        case "updateText":
            // Copy state
            stateEditable = {...previousState}
            // Assign answer data to answers array
            stateEditable.answers[instructions.data.questionId] = instructions.data.answer;
            return stateEditable

        case "updateMulti":
            // Copy state
            stateEditable = {...previousState}
            // Get questionId and optionId from instructions
            const {questionId, optionId} = instructions.data;
            // Update state of checked components
            stateEditable.answers[questionId][optionId] = instructions.data.selectState;
            return stateEditable;

        default:
            return previousState
    }
}