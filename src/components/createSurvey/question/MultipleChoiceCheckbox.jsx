import React from 'react'
import {useSurveyContext, useSurveyDispatchContext} from '../surveyContext'
import { activateOptionEditMode, deactivateOptionEditMode, updateOption } from './questionFunctions'

export default function MultipleChoiceCheckbox({ id }) {
  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();

  return (
    <div>
      <ul className='question-options-checkbox'>
        {
          state.data.questionOptions.map((option, index) => {
            return(
              <li className="question-option-checkbox" key={ index }>
                <input type="checkbox" name={option} id={option} />
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
