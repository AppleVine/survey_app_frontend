import React from 'react'

export default function MultipleChoiceCheckbox({ state, dispatch }) {
  return (
    <div>
      <ul className='question-options-checkbox'>
        {
          state.data.questionOptions.map((option, index) => {
            return(
              <li className="question-option-checkbox" key={ index }>
                <input type="checkbox" name={option} id={option} />
                <label htmlFor={ option }>{ option }</label>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
