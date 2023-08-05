import Header from "../components/header";
import { useEffect, useState } from 'react';
import { getAllResponses } from "../services/responseServices";
import { formatDate, parseMultipleChoiceQuestion, parseTextQuestion, sortResponses } from "../components/responseFunctions";

// CSS imports
import "./SurveyResponses.css"
import { Button } from "react-bootstrap";

export default function SurveyResponses() {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const allResponses = await getAllResponses();
        const sortedResponses = sortResponses(allResponses);
        setResponses(sortedResponses);
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
        {responses && responses.map((response) => (
          <div key={response._id} className="response-tile">
            <ul>
              <li>
                <h6>{formatDate(response.dateSubmitted)}</h6>
              </li>
              {response.answers.map((answer, index) => (
                <li key={index}>
                  <h3>Question {index + 1}: </h3>
                  { typeof answer === 'string' ?
                  parseTextQuestion(answer)
                  :
                  parseMultipleChoiceQuestion(answer)
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
