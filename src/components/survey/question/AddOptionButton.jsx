import {useSurveyDispatchContext} from '../../../contexts/surveyContext';
import {useEditContext} from '../../../contexts/editContext';

export default function AddOptionButton({ id }) {
  const editState = useEditContext();
  const dispatch = useSurveyDispatchContext();

  if (!editState) {
    return null
  }

  const handleClick = () => {
    dispatch({ type: "addOption", data: {index: id} })
  }

  return (
    <div>
      <button onClick={ () => handleClick() }>Add Option</button>
    </div>
  )
}
