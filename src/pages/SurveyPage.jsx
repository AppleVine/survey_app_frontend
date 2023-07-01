import React from 'react'
import { Link } from 'react-router-dom'

export default function SurveyPage() {
  return (
    <div>
      <Link to="/surveys/create">Create New Survey</Link>
    </div>
  )
}
