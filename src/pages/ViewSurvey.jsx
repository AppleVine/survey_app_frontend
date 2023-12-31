import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {useSurveyDispatchContext} from '../contexts/surveyContext';
import { getSurvey } from '../services/surveyServices';
import { checkForUser } from '../services/authServices';
import ViewSurveyContainer from '../components/survey/ViewSurveyContainer';
import SubmitResponseButton from '../components/survey/SubmitResponseButton';
import React from 'react';


// CSS imports
import Button from 'react-bootstrap/Button';
import { useResponseDispatchContext } from '../contexts/responseContext';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LeaveReview from '../components/LeaveReview';


export default function ViewSurvey() {
  // Get survey id from url
  let { surveyId } = useParams();
  // Set up dispatch so we can load the survey data into state
  const dispatch = useSurveyDispatchContext();
  // Set up response state and dispatch so we can store the responses
  const responseDispatch = useResponseDispatchContext();
  // Track whether or not there is a logged in user
  let isUser = false;
  // Set up redirects
  const navigate = useNavigate();
  // Swap components out when response is submitted
  const [submitted, setSubmitted] = useState(false);


  useEffect(() => {
    // Check if there is a logged in user
    // eslint-disable-next-line
    isUser = checkForUser();
  },[])

  useEffect(() => {
    // Get survey data and dispatch it into the state
    const fetchSurvey = async () => {
      const surveyData = await getSurvey(surveyId);
      // If 401 unauthorized then redirect to login
      if (surveyData.response === 401) {
        navigate('/login');
      } else {
        // Reformat question array
        let questionData = structuredClone(surveyData.survey.questions);
        let questionArray = [];
        for (let question of questionData) {
          question = {data: question};
          questionArray.push(question);
        }
        surveyData.survey.questions = structuredClone(questionArray);
        dispatch({type: "loadSurvey", data: surveyData.survey});
        // Create option array for responses
        let noOfOptions = [];
        for (let i = 0; i < questionArray.length; i++) {
          if (questionArray[i].data.questionType === "multipleChoiceCheckbox") {
            noOfOptions[i] = questionArray[i].data.questionOptions.length;
          }
        }
        responseDispatch({type:"load", data: {surveyId: surveyId, noOfQuestions: questionArray.length, 
          noOfOptions: noOfOptions}})
      }
    }

    fetchSurvey()
    .catch(console.error)
    // eslint-disable-next-line
  },[])

  return (
    <Col>
      {submitted ? <LeaveReview /> : <ViewSurveyContainer />}
      <div>
        {isUser ? (
          <Button variant='primary' href={`/surveys/${surveyId}/edit`} >Edit Survey</Button>
        ) : null}
      </div>
      <Row className="justify-content-center" >
        <SubmitResponseButton submitted={submitted} setSubmitted={setSubmitted}/>
      </Row>
    </Col>
  )
}