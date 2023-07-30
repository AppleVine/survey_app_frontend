import React, { useRef, useEffect } from 'react';
import { useResponseContext, useResponseDispatchContext } from '../../../contexts/responseContext';
import { useEditContext } from '../../../contexts/editContext';
import { addAlert, removeAlert } from './questionFunctions';

export default function LongText({id}) {
  const editState = useEditContext();
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

  if (editState) {
    return(
      <textarea ref={ref} id={`long-text-${id}`} name={`long-text-${id}`} rows="4" cols="50" className=''
      placeholder='---User response goes here---' >
      </textarea> 
    )
  }

  return (
        <textarea ref={ref} id={`long-text-${id}`} name={`long-text-${id}`} rows="4" cols="50" className=''
        onChange={(event) => handleResponseInput(event.target.value)} >
        </textarea> 
  )
}
