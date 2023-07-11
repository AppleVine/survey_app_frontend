import EditFieldButton from './EditFieldButton'

export default function SurveyIntroText({ state, dispatch }) {

  const handleChange = (value) => {
    dispatch({type: "save", data: {introduction: value}})
  }

  return (
    <div>
      { state.editMode.introduction ? 
        <textarea id='survey-intro-text' name='survey-intro-text' placeholder={state.data.introduction} onChange={ () => handleChange() }></textarea>
        :
        <p>{ state.data.introduction }</p> 
      }
      <EditFieldButton state={ state } dispatch={ dispatch } parent={ "introduction" } />
    </div>
  )
}
