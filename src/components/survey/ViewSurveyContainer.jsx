import React, {useEffect} from 'react'
import {useEditDispatchContext} from '../../contexts/editContext'
import SurveyTitle from './SurveyTitle'
import SurveyDescription from './SurveyDescription'
import SurveyIntroText from './SurveyIntroText'
import SurveyQuestionsContainer from './SurveyQuestionsContainer'
import EditSurveyButton from './EditSurveyButton'

// CSS imports
import styles from './EditViewSurveyContainer.module.css';
import Stack from 'react-bootstrap/Stack'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ViewSurveyContainer() {
  const editDispatch = useEditDispatchContext();

  useEffect(() => {
    editDispatch({data: false})
    // eslint-disable-next-line
  }, []);

  return (
<Row className='justify-content-center'>
  <Col md={10}>
    <Stack gap={3} className='survey-container'>
      <SurveyTitle />
      <SurveyDescription />
      <SurveyIntroText />
      <SurveyQuestionsContainer />
      <EditSurveyButton />
    </Stack>
  </Col>
</Row>
  )
} 
