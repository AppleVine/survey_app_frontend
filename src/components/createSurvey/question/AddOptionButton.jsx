import {useSurveyDispatchContext} from '../surveyContext';
import {useEditContext} from '../../../contexts/editContext';

export default function AddOptionButton({ id }) {
  const editState = useEditContext();
  const dispatch = useSurveyDispatchContext();

  const handleClick = () => {
    dispatch({ type: "addOption", data: {index: id} })
  }

  return (
    <div>
      {
        editState ? <button onClick={ () => handleClick() }>Add Option</button> : null
      }
    </div>
  )
}
