import React from 'react';
import QuestionText from './question/QuestionText';
import QuestionDetails from './question/QuestionDetails';
import QuestionResponse from './question/QuestionResponse';
import QuestionType from './question/QuestionType';
import RemoveQuestionButton from './RemoveQuestionButton';

// CSS imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

export default function QuestionContainer({ index }) {

  return (
    <div className='position-relative'>
      <Row>
        <Col>
          <RemoveQuestionButton questionId={index} />
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col md={11}>
          <Stack gap={3} className='position-relative'>
            <QuestionText id={ index } />
            <QuestionType id={ index } />
            <QuestionDetails id={ index } />
            <QuestionResponse id={ index } />
          </Stack>
        </Col>
      </Row>
    </div>
  )
}
