import React from 'react'
import { useResponseDispatchContext } from '../../../contexts/responseContext'

export default function LongText({id}) {
  const responseDispatch = useResponseDispatchContext();

  const handleResponseInput = (value) => {
    responseDispatch({type: "updateText", data: {questionId: id, answer: value}})
  }

  return (
    <div>
        <textarea id={`long-text-${id}`} name={`long-text-${id}`} rows="4" cols="50" 
        onChange={(event) => handleResponseInput(event.target.value)} >
        </textarea> 
    </div>
  )
}
