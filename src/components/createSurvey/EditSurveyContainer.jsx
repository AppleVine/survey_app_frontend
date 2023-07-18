import React, {useContext, useEffect} from 'react'
import EditContext from '../../contexts/editContext'
import MakePublicToggle from './MakePublicToggle'
import SurveyTitle from './SurveyTitle'
import SurveyDescription from './SurveyDescription'
import SurveyIntroText from './SurveyIntroText'
import SurveyQuestionsContainer from './SurveyQuestionsContainer'
import SurveyCompletionMessage from './SurveyCompletionMessage'
import SaveChangesButton from './SaveChangesButton'

export default function EditSurveyContainer() {
  let editContext = useContext(EditContext);

  useEffect(() => {
    editContext.setEdit(true)
  }, []);

  return (
    <div>
        <MakePublicToggle />
        <SurveyTitle />
        <SurveyDescription />
        <SurveyIntroText />
        <SurveyQuestionsContainer />
        <SurveyCompletionMessage />
        <SaveChangesButton />
    </div>
  )
}
