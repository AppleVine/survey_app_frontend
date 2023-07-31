import Header from "../components/header";
import { Fragment, useEffect, useState } from 'react';
import { getAllResponses } from "../services/responseServices";
import "./SurveyResponses.css"
import { Button } from "react-bootstrap";

export default function SurveyResponses() {
  const [responses, setResponses] = useState([]);

  const parseMultiChoice = (answer) => {
    if (answer.optionId) {
      return( 
        <Fragment>
          {`Option: ${answer.optionId} Answer: ${answer.text}`}
        </Fragment>
      )
    } else {
      return(
        <Fragment>
          {
            answer.map((data) => {
              return <div>{`Option: ${data.optionId} Answer: ${data.text}`}</div>
            })
          }
        </Fragment>
      )
    }
  }

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const allResponses = await getAllResponses();
        setResponses(allResponses);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResponses();
  }, []);

  return (
    <div>
      <Header />
      
      <div className="response-container">
        {responses.map((response) => (
          <div key={response._id} className="response-tile">
            <ul>
              {response.answers.map((answer, index) => (
                <li key={index}>
                  <h3>Question {index + 1}: </h3>
                  { typeof answer === 'string' ?
                  answer
                  :
                  parseMultiChoice(answer)
                  }
                </li>
              ))}
            </ul>
            <Button variant='info' href={`/surveys/${response.survey_id}`}>View Survey</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
