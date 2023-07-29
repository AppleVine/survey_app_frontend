import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSurveyDispatchContext } from '../contexts/surveyContext';
import { getSurvey } from '../services/surveyServices';
import { checkLoginAndRedirect } from '../services/authServices';
import EditSurveyContainer from '../components/survey/EditSurveyContainer';
import SaveEditedSurveyButton from '../components/survey/SaveEditedSurveyButton';
import Header from '../components/header';

// Style import
import './CreateEditSurvey.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function EditSurvey() {
  // Redirect to login page if not logged in
  useEffect(() => {
    checkLoginAndRedirect();
  }, []);

  // Get survey id from url
  let { surveyId } = useParams();
  // Set up dispatch so we can load the survey data into state
  const dispatch = useSurveyDispatchContext();

  useEffect(() => {
    // Get survey data and dispatch it into the state
    const fetchSurvey = async () => {
      const surveyData = await getSurvey(surveyId);
      // Reformat question array
      let questionData = structuredClone(surveyData.survey.questions);
      let questionArray = [];
      for (let question of questionData) {
        question = {data: question};
        questionArray.push(question);
      }
      surveyData.survey.questions = structuredClone(questionArray);
      dispatch({type: "loadSurvey", data: surveyData.survey});
    }

    fetchSurvey()
    .catch(console.error)
    // eslint-disable-next-line
  },[])

  return (
    <Container fluid>
      <Header />
      <Row className='justify-content-center'>
        <Col>
          <EditSurveyContainer  />
          <SaveEditedSurveyButton />
        </Col>
      </Row>
    </Container>
  )
}