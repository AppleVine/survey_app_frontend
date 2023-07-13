import React from 'react'
import { activateOptionEditMode } from './questionFunctions'

export default function MultipleChoiceRadio({ state, dispatch }) {
  return (
    <div>
      <ul className='question-options-radio'>
        {
          state.data.questionOptions.map((option, index) => {
            return(
              <li className="question-option-radio" key={ index }>
                <input type="radio" name={ option } id={ option } />
                {
                  state.editMode.questionOptions[index]
                  ? 
                  <input type='text' placeholder={ option } ></input>
                  :
                  <label htmlFor={ option } onClick={ () => activateOptionEditMode(index, state, dispatch) }>{ option }</label>
                }
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
