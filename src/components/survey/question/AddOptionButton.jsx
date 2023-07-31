import {useSurveyDispatchContext} from '../../../contexts/surveyContext';
import {useEditContext} from '../../../contexts/editContext';

// CSS imports
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    <Row className='justify-content-center'>
      <Col md={2}>
        <Button className="add-option-button" aria-label="add-option" variant='secondary' onClick={ () => handleClick() }></Button>
      </Col>
    </Row>
  )
}
