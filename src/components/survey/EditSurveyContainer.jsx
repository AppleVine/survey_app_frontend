import React, {useEffect} from 'react'
import {useEditDispatchContext} from '../../contexts/editContext'
import MakePublicToggle from './MakePublicToggle'
import SurveyTitle from './SurveyTitle'
import SurveyDescription from './SurveyDescription'
import SurveyIntroText from './SurveyIntroText'
import SurveyQuestionsContainer from './SurveyQuestionsContainer'
import SurveyCompletionMessage from './SurveyCompletionMessage'

export default function EditSurveyContainer() {
  const editDispatch = useEditDispatchContext();

  useEffect(() => {
    editDispatch({data: true})
    // eslint-disable-next-line
  }, []);

  return (
    <div>
        <MakePublicToggle />
        <SurveyTitle />
        <SurveyDescription />
        <SurveyIntroText />
        <SurveyQuestionsContainer />
        <SurveyCompletionMessage />
    </div>
  )
}
