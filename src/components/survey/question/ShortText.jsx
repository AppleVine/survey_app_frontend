import React, { useRef, useEffect } from 'react'
import { useResponseContext, useResponseDispatchContext } from '../../../contexts/responseContext'
import { addAlert, removeAlert } from './questionFunctions';
import { useEditContext } from '../../../contexts/editContext';

export default function ShortText({id}) {
  const editState = useEditContext();
  const responseState = useResponseContext() || null;
  const responseDispatch = useResponseDispatchContext() || null;

  const ref = useRef(null);

  useEffect(() => {
    if (responseState.alert && (responseState.answers[id] === null || responseState.answers[id] === "")) {
      addAlert(ref);
    } else {
      removeAlert(ref);
    }
  }, [responseState, id])

  const handleResponseInput = (value) => {
    responseDispatch({type: "updateText", data: {questionId: id, answer: value}})
  }

  if (editState) {
    return(
      <input ref={ref} type="text" className="short-text" placeholder='---User response goes here---' />
    )
  }

  return (
    <input ref={ref} type="text" className="short-text" onChange={(event) => handleResponseInput(event.target.value)} />
  )
}
