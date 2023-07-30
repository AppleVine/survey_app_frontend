import React, { useEffect, useState, useRef } from 'react'
import { useSurveyContext, useSurveyDispatchContext } from '../../../contexts/surveyContext';
import {useEditContext} from '../../../contexts/editContext';
import AddOptionButton from './AddOptionButton';
import RemoveOptionButton from './RemoveOptionButton';
import { addAlert, removeAlert } from './questionFunctions';

// CSS imports
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useResponseContext, useResponseDispatchContext } from '../../../contexts/responseContext';

export default function MultipleChoice({ id, type }) {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();
  const responseState = useResponseContext() || null;
  const responseDispatch = useResponseDispatchContext() || null;
  const [optionArray, setOptionArray] = useState([]);
  const [editModeArray, setEditModeArray] = useState(false);
  const editState = useEditContext();

  const ref = useRef(null);

  const handleOptionChange = (index, value) => {
    let newOptionArray = [...optionArray];
    newOptionArray[index] = value;
    setOptionArray(newOptionArray);
  }

  const handleActivateEdit = (index) => {
    let newEditModeArray = {...editModeArray};
    newEditModeArray[index] = true;
    setEditModeArray(newEditModeArray);
  }

  const handleDeactivateEdit = (index) => {
    let newEditModeArray = {...editModeArray};
    newEditModeArray[index] = false;
    setEditModeArray(newEditModeArray);
  }

  const handleSelectOption = (questionId, optionId) => {
    if (type === "radio") {
      responseDispatch({type: "updateMultiRadio", data:{questionId: questionId, optionId: optionId}})
    } else {
      let newState = !responseState.answers[questionId][optionId];
      responseDispatch({type: "updateMultiCheck", data:{questionId: questionId, optionId: optionId, selectState: newState}})
    }

  }

  // Trigger rerender on state change
  useEffect(() => {},[state])

  // Set question options on re-render (Do not combine with above function- triggers infinite-rerender!)
  useEffect(() => {
    setOptionArray(state.data.questions[id].data.questionOptions)
    // eslint-disable-next-line
  },[])

  // Update global state when question edited
  useEffect(() => {
    // Check that question options are not empty or default data
    // eslint-disable-next-line
    if (optionArray != [] && optionArray != ["Enter an option", "Enter an option", "Enter an option"]) {  // Must be loose equality!
      dispatch({type: "updateQuestion", data: {questionId: id, field: "questionOptions", value: optionArray}});
    }
    // eslint-disable-next-line
  },[optionArray])

  // Highlight unanswered questions
  useEffect(() => {
    if (responseState && !editState) {
      if (responseState.alert && (responseState.answers[id] === null || responseState.answers[id] === "")) {
        addAlert(ref);
      } else {
        removeAlert(ref);
      }
    }
  }, [responseState, id, editState])

  // In view survey mode
  if (!editState) {
    return(
      <Row className='justify-content-center'>
      <Col md={10}>
        <Stack ref={ref} gap={2} className={`question-options-${type} question-options`}>
          {
            state.data.questions[id].data.questionOptions.map((option, index) => {
              return(
                <div className={`question-option-${type} question-option`} key={ index }>
                  <input type={type} name={ `question${id}` } id={ option } defaultChecked={false} 
                  onChange={() => handleSelectOption(id, index)} />
                  <label htmlFor={ option } >{ option }</label>
                </div>
              )
            })
          }
        </Stack>
      </Col>
    </Row>
    )
  }


  return (
    <Row className='justify-content-center'>
      <Col md={10}>
        <Stack gap={2} className={`question-options-${type} question-options`}>
          {
            state.data.questions[id].data.questionOptions.map((option, index) => {
              return(
                <div className={`question-option-${type} question-option`} key={ index }>
                  <input type={type} name={ option } id={ option } />
                  {
                    editState && editModeArray[index]
                    ? 
                    <input type='text' placeholder={ option }
                    onChange={ (event) => handleOptionChange(index, event.target.value) } 
                    onKeyDown={ (event) => event.key === "Enter" ? handleDeactivateEdit(index): null} 
                    onBlur={ () => handleDeactivateEdit(index) } ></input>
                    :
                    <label htmlFor={ option } onClick={ () => handleActivateEdit(index) } >{ option }</label>
                  }
                  <RemoveOptionButton questionId={id} optionId={index} />
                </div>
              )
            })
          }
          <AddOptionButton id={ id } />
        </Stack>
      </Col>
    </Row>
  )
}
