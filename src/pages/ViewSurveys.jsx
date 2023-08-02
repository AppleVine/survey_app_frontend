import { useEffect, useState } from "react";
import Header from "../components/header";
import { getSurveys } from "../services/surveyServices";
import { checkLoginAndRedirect } from '../services/authServices';
import Button from 'react-bootstrap/Button';
import "./ViewSurveys.css";

export default function ViewSurveys() {
  const [surveys, setSurveys] = useState([]);

  // Redirect to login page if not logged in
  useEffect(() => {
    checkLoginAndRedirect();
  }, []);

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const theSurveys = await getSurveys();
        // Sort the surveys array based on dateSubmitted in descending order
        theSurveys.sort((a, b) => new Date(b.dateSubmitted) - new Date(a.dateSubmitted));
        setSurveys(theSurveys);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSurveys();
  }, []);

  // format date to dd/mm/yy
  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-GB");
    return formattedDate;
  };

  return (
    <div>
      <Header />
      <div className="surveys-container">
        {surveys.map((survey) => (
          <div key={survey._id} className="survey-title">
            <div className="title-id">
                <h2>{survey.title}</h2>
              <div className="id-date-container">
                <h6>{survey._id}</h6>
                <h6>{formatDate(survey.dateSubmitted)}</h6>
              </div>
            </div>
            <div className="survey-info">
              <p>{survey.description}</p>
              <h6>Responses: {survey.responses.length}</h6>
            </div>
            <div className="nav-button">
              <Button variant='info' href={`/responses/${survey._id}`}>View Responses</Button>
              <Button variant='info' href={`/surveys/${survey._id}`}>View Survey</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
