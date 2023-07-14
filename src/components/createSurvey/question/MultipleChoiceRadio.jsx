import React from 'react'
import {useSurveyContext, useSurveyDispatchContext} from '../surveyContext'
import { activateOptionEditMode, deactivateOptionEditMode, updateOption } from './questionFunctions'

export default function MultipleChoiceRadio({ id }) {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();

  return (
    <div>
      <ul className='question-options-radio'>
        {
          state.data.questions[id].data.questionOptions.map((option, index) => {
            return(
              <li className="question-option-radio" key={ index }>
                <input type="radio" name={ option } id={ option } />
                {
                  state.data.questions[id].editMode.questionOptions[index]
                  ? 
                  <input type='text' placeholder={ option }
                  onChange={ (event) => updateOption(id, index, event.target.value, dispatch) } 
                  onKeyDown={ (event) => event.key === "Enter" ? deactivateOptionEditMode(id, index, state, dispatch): null} 
                  onBlur={ () => deactivateOptionEditMode(id, index, state, dispatch) } ></input>
                  :
                  <label htmlFor={ option } onClick={ () => activateOptionEditMode(id, index, state, dispatch) } >{ option }</label>
                }
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
