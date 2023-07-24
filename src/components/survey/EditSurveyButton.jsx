import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { checkForUser } from '../../services/authServices'

export default function EditSurveyButton() {
 const {surveyId} = useParams();
 const isUser = checkForUser();

  return (
    <div>
      {
        isUser ? <Link to={`/surveys/${surveyId}/edit`}>Edit Survey</Link>: null
      }
    </div>
  )
}
