import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { checkForUser } from '../../services/authServices'

// CSS imports
import Button from 'react-bootstrap/Button';

export default function EditSurveyButton() {
 const {surveyId} = useParams();
 const isUser = checkForUser();

  return (
    <div className='d-flex justify-content-center'>
      {
        isUser ? <Link to={`/surveys/${surveyId}/edit`}><Button variant="primary">Edit Survey</Button></Link>: null
      }
    </div>
  )
}
