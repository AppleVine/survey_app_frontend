import React from 'react'
import { Button } from 'react-bootstrap'
import { useResponseContext } from '../../contexts/responseContext'
import { useSurveyContext } from '../../contexts/surveyContext';

export default function SubmitResponseButton() {
    const surveyState = useSurveyContext();
    const responseState = useResponseContext();

    const handleSubmitResponse = () => {
    // Get answer array from state
    const responseData = responseState.data.answers;
    }


  return (
    <Button variant='primary'>Submit Response</Button>
  )
}
