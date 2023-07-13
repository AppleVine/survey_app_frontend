import React from 'react';
import AddQuestionButton from './AddQuestionButton';
import QuestionContainer from './QuestionContainer';

export default function SurveyQuestionsContainer({ state, dispatch }) {

  return (
    <div>
      <ul>
        { 
        // Loop through question array and generate a question container for each existing question
          state.data.questions.map( question => {
            // Assign key based on question order in array
            return(
              <li key={ state.data.questions.indexOf(question) }>
                <QuestionContainer question={question} state={ state } dispatch={ dispatch } />
              </li>
            )
        }) }
      </ul>
      <AddQuestionButton state={ state } dispatch={ dispatch } />
    </div>
  )
}
