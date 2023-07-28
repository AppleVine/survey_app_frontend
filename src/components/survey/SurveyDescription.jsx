import {useSurveyContext, useSurveyDispatchContext} from '../../contexts/surveyContext'
import EditFieldButton from './EditFieldButton'
import { saveField } from './surveyFunctions'

export default function SurveyDescription() {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();

  return (
    <div className='survey-field'>
      { state.editMode.description ? 
        <textarea className='inline' id='survey-description' name='survey-description' placeholder={state.data.description} 
        onChange={ (event) => saveField("description", event.target.value, dispatch) }></textarea>
        :
        <p className='inline'>{ state.data.description }</p> 
      }
      <EditFieldButton state={ state } dispatch={ dispatch } parent={ "description" } />
    </div>
  )
}
