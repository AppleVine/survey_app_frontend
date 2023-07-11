import EditFieldButton from './EditFieldButton'

export default function SurveyIntroText({ state, dispatch }) {

  return (
    <div>
      { state.editMode.introduction ? 
        <textarea id='survey-intro-text' name='survey-intro-text' placeholder='Insert Survey Introduction Here'></textarea>
        :
        <p>{ state.introduction }</p> 
      }
      <EditFieldButton state={ state } dispatch={ dispatch } parent={ "introduction" } />
    </div>
  )
}
