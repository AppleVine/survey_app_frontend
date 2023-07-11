import EditFieldButton from './EditFieldButton'

export default function SurveyDescription({ state, dispatch }) {

  const handleChange = (value) => {
    dispatch({type: "save", data: {description: value}})
  }

  return (
    <div>
      { state.editMode.description ? 
        <textarea id='survey-description' name='survey-description' placeholder={state.data.description} onChange={ () => handleChange() }></textarea>
        :
        <p>{ state.data.description }</p> 
      }
      <EditFieldButton state={ state } dispatch={ dispatch } parent={ "description" } />
    </div>
  )
}
