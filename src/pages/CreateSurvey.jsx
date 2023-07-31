import React, {useEffect} from 'react';
import EditSurveyContainer from '../components/survey/EditSurveyContainer';
import { checkLoginAndRedirect } from '../services/authServices';
import SaveNewSurveyButton from '../components/survey/SaveNewSurveyButton';
import Header from '../components/header';

// Style import
import './CreateEditSurvey.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function CreateSurvey() {

  // Redirect to login page if not logged in
  useEffect(() => {
    checkLoginAndRedirect();
  }, []);

  return (
    <Container fluid>
      <Header />
      <Row className='justify-content-center'>
        <Col>
          <EditSurveyContainer  />
          <SaveNewSurveyButton />
        </Col>
      </Row>
    </Container>
  )
}