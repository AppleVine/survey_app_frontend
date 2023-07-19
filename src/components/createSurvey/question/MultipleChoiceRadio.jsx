import React, { useEffect, useState } from 'react'
import { useSurveyContext, useSurveyDispatchContext } from '../surveyContext';
import {useEditContext} from '../../../contexts/editContext';

export default function MultipleChoiceRadio({ id }) {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();
  const [optionArray, setOptionArray] = useState([]);
  const [editModeArray, setEditModeArray] = useState(false);
  const editState = useEditContext();

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

  // Trigger rerender on state change
  useEffect(() => {},[state])

  // Set question options on re-render (Do not combine with above function- triggers infinite-rerender!)
  useEffect(() => {
    setOptionArray(state.data.questions[id].data.questionOptions)
    // eslint-disable-next-line
  },[])

  // Update global state when question edited
  useEffect(() => {
    // Check that question text is not empty string or default data
    if (optionArray != []) {  // Must be loose equality!
      dispatch({type: "updateQuestion", data: {questionId: id, field: "questionOptions", value: optionArray}});
    }
    // eslint-disable-next-line
  },[optionArray])


  return (
    <div>
      <ul className='question-options-radio'>
        {
          state.data.questions[id].data.questionOptions.map((option, index) => {
            return(
              <li className="question-option-radio" key={ index }>
                <input type="radio" name={ option } id={ option } />
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
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
