import Header from "../components/header";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSurvey, getSurveyResponses } from "../services/responseServices";
import { formatDate, parseResponse, sortResponses } from "../components/responseFunctions";
import "./SurveyResponses.css";

export default function SurveyResponses() {
  const { surveyID } = useParams();
  const [responses, setResponses] = useState([]);
  const [survey, setSurvey] = useState([]);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const surveyResponses = await getSurveyResponses(surveyID);
        // Sort the surveyResponses array based on dateSubmitted in descending order
        const sortedResponses = sortResponses(surveyResponses);
        setResponses(sortedResponses);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResponses();
  }, [surveyID]);

  useEffect(() => {
    const fetchSurvey = async () => {
      try {
        const theSurvey = await getSurvey(surveyID);
        setSurvey(theSurvey);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchSurvey();
  }, [surveyID]);

  return (
    <div>
      <Header />

      <div className="container">
        <h3>{survey.title}</h3>
      </div>
      
      <div className="response-container">
        {responses.map((response) => (
          <div key={response._id} className="response-tile">
            <ul>
              <li>
                <h6>{formatDate(response.dateSubmitted)}</h6>
              </li>
              {survey.questions && Array.isArray(survey.questions) && survey.questions.map((question, index) => (
                <li key={index}>
                  <strong>Question {index + 1}: </strong>
                  {question.questionText}
                  <br />
                  {parseResponse(question, response.answers[index])}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
