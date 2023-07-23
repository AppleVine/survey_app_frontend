import React from 'react'
import { Link } from 'react-router-dom';
import { checkForUser } from '../../services/authServices'

export default function EditSurveyButton() {
 const isUser = checkForUser();

  return (
    <div>
      {
        isUser ? <Link to="/surveys/:id/edit">Edit Survey</Link>: null
      }
    </div>
  )
}
