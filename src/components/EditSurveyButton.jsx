import React from 'react'
import UserContext from '../services/userContext';

export default function EditSurveyButton() {
  const {isUser, setIsUser} = useContext(UserContext);
  return (
    <div>
      {
        isUser ? <Link to="/surveys/:id/edit">Edit Survey</Link>: null
      }
    </div>
  )
}
