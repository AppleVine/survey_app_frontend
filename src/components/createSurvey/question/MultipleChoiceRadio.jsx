import React from 'react'

export default function MultipleChoiceRadio({ questionState, questionDispatch }) {
  return (
    <div>
      <ul className='question-options-radio'>
        {
          questionState.data.questionOptions.map((option, index) => {
            return(
              <li className="question-option-radio" key={ index }>
                <input type="radio" name={ option } id={ option } />
                <label htmlFor={ option }>{ option }</label>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
