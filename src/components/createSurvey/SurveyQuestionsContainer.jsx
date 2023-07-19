import React, { useEffect, useState } from 'react';
import {useSurveyContext} from './surveyContext'
import AddQuestionButton from './AddQuestionButton';
import QuestionContainer from './QuestionContainer';

export default function SurveyQuestionsContainer() {
  const state = useSurveyContext();

  return (
    <div>
      <ul>
        { 
        // Loop through question array and generate a question container for each existing question
          state.data.questions.map( (question, index) => {
            // Assign key based on question order in array
            return(
              <li key={ index }>
                <QuestionContainer question={question} index={index} />
              </li>
            )
        }) }
      </ul>
      <AddQuestionButton />
    </div>
  )
}
