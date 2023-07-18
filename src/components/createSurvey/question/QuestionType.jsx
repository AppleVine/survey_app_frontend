import React, {useContext, useState, useEffect} from 'react'
import EditContext from '../../../contexts/editContext';

export default function QuestionType({id, questionState, setQuestionState}) {
    const {edit, setEdit} = useContext(EditContext);
    const [questionType, setQuestionType] = useState("multipleChoiceRadio");

    useEffect(() => {
        let newQuestionState = {...questionState}
        newQuestionState.data.questionType = questionType;
        setQuestionState(newQuestionState);
      },[questionType])

  return (
    <div>
      { 
        edit ? 
        <select name="questionType" id={id} onChange={(event) => setQuestionType(event.target.value)} >
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
