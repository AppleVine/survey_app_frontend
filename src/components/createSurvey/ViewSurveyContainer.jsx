import React, {useContext, useEffect} from 'react'
import EditContext from '../../contexts/editContext'
import SurveyTitle from './SurveyTitle'
import SurveyDescription from './SurveyDescription'
import SurveyIntroText from './SurveyIntroText'
import SurveyQuestionsContainer from './SurveyQuestionsContainer'

export default function ViewSurveyContainer() {
  let editContext = useContext(EditContext);

  useEffect(() => {
    editContext.setEdit(false)
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
