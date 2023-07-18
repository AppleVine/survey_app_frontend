import React from 'react'

export default function LongText({id}) {
  return (
    <div>
        <textarea id={`long-text-${id}`} name={`long-text-${id}`} rows="4" cols="50">
        </textarea> 
    </div>
  )
}
