import React from 'react'
import { Button } from 'react-bootstrap'
import { useResponseContext, useResponseDispatchContext } from '../../contexts/responseContext'
import { useSurveyContext } from '../../contexts/surveyContext';
import { submitSurveyResponse } from '../../services/responseServices';

export default function SubmitResponseButton() {
    const surveyState = useSurveyContext();
    const responseState = useResponseContext();
    const responseDispatch = useResponseDispatchContext();

    const handleSubmitResponse = async () => {
        // Check that all questions are answered
        for (let response of responseState.answers) {
            if (response === null || response === "") {
                alert("Please answer all questions before submitting.");
                responseDispatch({type: "alert"});
                return
            }
        }
        // Make a copy of current state
        const responseData = structuredClone(responseState);
        // Remove 'alert'
        delete responseData.alert;
        // Get multiple choice questions
        for (let i = 0; i < surveyState.data.questions.length; i++) {
            if (surveyState.data.questions[i].data.questionType === "multipleChoiceRadio") {
                let optionId =  responseData.answers[i];
                // Get the text of the answer from survey state
                let fullAnswer = {optionId: optionId, text: surveyState.data.questions[i].data.questionOptions[optionId]};
                responseData.answers[i] = fullAnswer;
            } else if (surveyState.data.questions[i].data.questionType === "multipleChoiceCheckbox") {
                let optionArray = responseData.answers[i];
                let fullAnswerArray = [];
                // For each answer checked, get the option number and text of the answer
                for (let j = 0; j < optionArray.length; j++) {
                    if (responseData.answers[i][j]) {
                        fullAnswerArray.push({optionId: j, text: surveyState.data.questions[i].data.questionOptions[j]})
                    }
                }
                responseData.answers[i] = fullAnswerArray;
                }
            }
        // Submit response data
        await submitSurveyResponse(responseData);
    }


  return (
    <Button variant='primary' onClick={handleSubmitResponse}>Submit Response</Button>
  )
}
