import React from 'react'
import { useResponseDispatchContext } from '../../../contexts/responseContext'

export default function ShortText({id}) {
  const responseDispatch = useResponseDispatchContext();

  const handleResponseInput = (value) => {
    responseDispatch({type: "update", data: {questionId: id, answer: value}})
  }

  return (
    <div>
      <input type="text" className="short-text" onChange={(event) => handleResponseInput(event.target.value)} />
    </div>
  )
}
