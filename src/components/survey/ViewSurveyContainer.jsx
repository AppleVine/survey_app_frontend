import React, {useEffect} from 'react'
import {useEditDispatchContext} from '../../contexts/editContext'
import SurveyTitle from './SurveyTitle'
import SurveyDescription from './SurveyDescription'
import SurveyIntroText from './SurveyIntroText'
import SurveyQuestionsContainer from './SurveyQuestionsContainer'

export default function ViewSurveyContainer() {
  const editDispatch = useEditDispatchContext();

  useEffect(() => {
    editDispatch({data: false})
    // eslint-disable-next-line
  }, []);

  return (
    <div>
        <SurveyTitle />
        <SurveyDescription />
        <SurveyIntroText />
        <SurveyQuestionsContainer />
    </div>
  )
}
