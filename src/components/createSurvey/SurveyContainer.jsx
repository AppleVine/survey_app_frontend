import React from 'react'
import SurveyTitle from './SurveyTitle'
import SurveyDescription from './SurveyDescription'
import SurveyIntroText from './SurveyIntroText'
import SurveyQuestionsContainer from './SurveyQuestionsContainer'
import SurveyCompletionMessage from './SurveyCompletionMessage'
import SaveChangesButton from './SaveChangesButton'

export default function SurveyContainer() {

// TODO Add button to toggle makePublic

  return (
    <div>
        <SurveyTitle />
        <SurveyDescription />
        <SurveyIntroText />
        <SurveyQuestionsContainer />
        <SurveyCompletionMessage />
        <SaveChangesButton />
    </div>
  )
}
