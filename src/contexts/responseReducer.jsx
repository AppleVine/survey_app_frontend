export const initialResponse = {
    surveyId: null,
    answers: []
}

export const responseReducer = (previousState, instructions) => {

    // stateEditable will be used in all cases
    let stateEditable = null;
    // Question and option id
    let questionId, optionId = null;

    switch (instructions.type) {

        case "load":
            // Load survey id into state and generate an answer array of the correct length
            // Copy state
            stateEditable = {...previousState}
            stateEditable.surveyId = instructions.data.surveyId;
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

        case "updateMultiRadio":
            // Copy state
            stateEditable = {...previousState}
            // Get questionId and optionId from instructions
            questionId = instructions.data.questionId;
            optionId = instructions.data.optionId;
            // Update state of checked components
            stateEditable.answers[questionId] = optionId;
            return stateEditable;

        case "updateMultiCheck":
            // Copy state
            stateEditable = {...previousState}
            // Get questionId and optionId from instructions
            questionId = instructions.data.questionId;
            optionId = instructions.data.optionId;
            // Update state of checked components
            stateEditable.answers[questionId][optionId] = instructions.data.selectState;
            return stateEditable;

        default:
            return previousState
    }
}