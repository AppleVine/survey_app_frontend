import {useSurveyContext, useSurveyDispatchContext} from './surveyContext'
import EditFieldButton from './EditFieldButton'
import { saveField } from './surveyFunctions'

export default function SurveyIntroText() {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();

  return (
    <div>
      { state.editMode.introduction ? 
        <textarea id='survey-intro-text' name='survey-intro-text' placeholder={state.data.introduction} 
        onChange={ (event) => saveField("introduction", event.target.value, dispatch) }></textarea>
        :
        <p>{ state.data.introduction }</p> 
      }
      <EditFieldButton state={ state } dispatch={ dispatch } parent={ "introduction" } />
    </div>
  )
}
