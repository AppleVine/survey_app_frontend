import React, { useEffect, useState } from 'react'

export default function MultipleChoiceRadio({ id, questionState, setQuestionState }) {
  const [optionArray, setOptionArray] = useState(questionState.data.questionOptions);
  const [editModeArray, setEditModeArray] = useState(false);

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

  useEffect(() => {
    let newQuestionState = {...questionState}
    newQuestionState.data.questionOptions = optionArray;
    setQuestionState(newQuestionState);
  },[optionArray])

  return (
    <div>
      <ul className='question-options-radio'>
        {
          optionArray.map((option, index) => {
            return(
              <li className="question-option-radio" key={ index }>
                <input type="radio" name={ option } id={ option } />
                {
                  editModeArray[index]
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
