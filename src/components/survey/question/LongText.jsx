import React, { useRef, useEffect } from 'react'
import { useResponseContext, useResponseDispatchContext } from '../../../contexts/responseContext'
import { addAlert, removeAlert } from './questionFunctions';

export default function LongText({id}) {
  const responseState = useResponseContext() || null;
  const responseDispatch = useResponseDispatchContext() || null;

  const ref = useRef(null);

  useEffect(() => {
    if (responseState) {
      if (responseState.alert && (responseState.answers[id] === null || responseState.answers[id] === "")) {
        addAlert(ref);
      } else {
        removeAlert(ref);
      }
    }
  }, [responseState, id])

  const handleResponseInput = (value) => {
    responseDispatch({type: "updateText", data: {questionId: id, answer: value}})
  }

  return (
    <div>
        <textarea ref={ref} id={`long-text-${id}`} name={`long-text-${id}`} rows="4" cols="50" className=''
        onChange={(event) => handleResponseInput(event.target.value)} >
        </textarea> 
    </div>
  )
}
