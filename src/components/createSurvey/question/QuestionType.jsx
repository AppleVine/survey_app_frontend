import React, { useState, useEffect } from 'react'
import { useSurveyContext, useSurveyDispatchContext } from '../surveyContext';
import {useEditContext} from '../../../contexts/editContext';
import { initialQuestion } from '../surveyReducer';

export default function QuestionType({id}) {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();
  const [userInput, setUserInput] = useState("");
  const editState = useEditContext();
  const [questionType, setQuestionType] = useState("");

  // Trigger rerender on state change
  useEffect(() => {},[state])

  // Set question type on re-render (Do not combine with above function- triggers infinite-rerender!)
  useEffect(() => {
    setQuestionType(state.data.questions[id].data.questionType)
    // eslint-disable-next-line
  },[])

  // Update global state when question edited
  useEffect(() => {
    // Check that question text is not empty string
    if (questionType) {
      dispatch({type: "updateQuestion", data: {questionId: id, field: "questionType", value: questionType}});
    }
    // eslint-disable-next-line
  },[questionType])

  useEffect(() => {
    // If input is not empty string
    if (userInput) {
      setQuestionType(userInput);
    };
    // eslint-disable-next-line
  },[userInput])

  return (
    <div>
      { 
        editState ? 
        <select name="questionType" id={`question-type-selector${id}`} onChange={(event) => setUserInput(event.target.value)} >
            <option value="multipleChoiceRadio">Multiple Choice (Radio)</option>
            <option value="multipleChoiceCheckbox">Multiple Choice (Checkbox)</option>
            <option value="shortText">Short Text</option>
            <option value="longText">Long Text</option>
        </select>
        :
        null 
      }
    </div>
  )
}
