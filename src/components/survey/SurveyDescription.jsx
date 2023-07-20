import {useSurveyContext, useSurveyDispatchContext} from '../../contexts/surveyContext'
import EditFieldButton from './EditFieldButton'
import { saveField } from './surveyFunctions'

export default function SurveyDescription() {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();

  return (
    <div>
      { state.editMode.description ? 
        <textarea id='survey-description' name='survey-description' placeholder={state.data.description} 
        onChange={ (event) => saveField("description", event.target.value, dispatch) }></textarea>
        :
        <p>{ state.data.description }</p> 
      }
      <EditFieldButton state={ state } dispatch={ dispatch } parent={ "description" } />
    </div>
  )
}
