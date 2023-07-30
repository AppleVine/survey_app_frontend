import {useSurveyContext, useSurveyDispatchContext} from '../../contexts/surveyContext'
import EditFieldButton from './EditFieldButton'
import { saveField } from './surveyFunctions'

export default function SurveyReviewLink() {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();

  return (
    <div>
      <h4>Link to Google Maps:</h4>
      { state.editMode.reviewLink ? 
        <input id='survey-review-link' name='survey-review-link' placeholder={state.data.reviewLink} 
        onChange={ (event) => saveField("reviewLink", event.target.value, dispatch) } />
        :
        <p className='inline'>{ state.data.reviewLink }</p> 
      }
      <EditFieldButton state={ state } dispatch={ dispatch } parent={ "reviewLink" } />
    </div>
  )
}
