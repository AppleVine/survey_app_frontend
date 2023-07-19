import React, {useContext, useState, useEffect} from 'react'
import { useSurveyContext, useSurveyDispatchContext } from '../surveyContext';
import EditContext from '../../../contexts/editContext';
import { initialQuestion } from '../surveyReducer';

export default function QuestionType({id}) {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();
  const [userInput, setUserInput] = useState("");
  const {edit, setEdit} = useContext(EditContext);
  const [questionType, setQuestionType] = useState(state.data.questions[id].data.questionType);

  // Trigger rerender on state change
  useEffect(() => {},[state])

  // Set question type on re-render (Do not combine with above function- triggers infinite-rerender!)
  useEffect(() => {
    setQuestionType(state.data.questions[id].data.questionType)
    // eslint-disable-next-line
  },[])

  useEffect(() => {
    // If input is not empty string
    if (userInput) {
      setQuestionType(userInput);
    };
    // eslint-disable-next-line
  },[userInput])

  // Update global state when question edited
  useEffect(() => {
    // Check that question text is not empty string or default data
    if (questionType && questionType !== initialQuestion.data.questionType) {
      dispatch({type: "updateQuestion", data: {questionId: id, field: "questionType", value: questionType}});
    }
    // eslint-disable-next-line
  },[questionType])

  return (
    <div>
      { 
        edit ? 
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
