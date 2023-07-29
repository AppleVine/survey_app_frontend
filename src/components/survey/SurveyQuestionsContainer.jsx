import React from 'react';
import {useSurveyContext} from '../../contexts/surveyContext';
import AddQuestionButton from './AddQuestionButton';
import QuestionContainer from './QuestionContainer';

// CSS imports
import Stack from 'react-bootstrap/Stack';

export default function SurveyQuestionsContainer() {
  const state = useSurveyContext();

  return (
    <Stack gap={3}>
        <form>
          { 
            // Loop through question array and generate a question container for each existing question
              state.data.questions.map( (question, index) => {
                // Assign key based on question order in array
                return(
                  <div className='question-card' key={ index }>
                    <QuestionContainer index={index} />
                  </div>
                )
            }) }
        </form>
      <AddQuestionButton />
    </Stack>
  )
}
