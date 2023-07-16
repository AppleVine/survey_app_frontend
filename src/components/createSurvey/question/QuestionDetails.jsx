import React from 'react';
import { useSurveyContext, useSurveyDispatchContext } from '../surveyContext';
import { activateEditQuestionMode, deactivateEditQuestionMode, saveQuestionField } from '../surveyFunctions';

export default function QuestionDetails({ id }) {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();

  return (
    <div onClick={() => activateEditQuestionMode(id, "questionDetails", dispatch)}
    onBlur={() => deactivateEditQuestionMode(id, "questionDetails", dispatch)}>
      { state.data.questions[id].editMode.questionDetails ? 
      <input type='text' placeholder={ state.data.questions[id].data.questionDetails }
      onChange={(event) => saveQuestionField(id, "questionDetails", event.target.value, dispatch)} ></input> 
      : 
      <span>{state.data.questions[id].data.questionDetails}</span> }
    </div>
  )
}
