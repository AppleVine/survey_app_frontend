import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import { getSurveys } from "../services/surveyServices";
import { checkLoginAndRedirect } from '../services/authServices';

// CSS imports
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
        setSurveys(theSurveys);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSurveys();
  }, []);

  return (
    <div>
      <Header />
      <div className="surveys-container">
        {surveys.map((survey) => (
          <div key={survey._id} className="survey-title">
            <div className="title-id">
              <Link className="survey-link" to={`/surveys/${survey._id}`}>
                <h2>{survey.title}</h2>
              </Link>
              <h6>{survey._id}</h6>
            </div>
            <div className="survey-info">
              <p>{survey.description}</p>
              <h6>Responses: {survey.responses.length}</h6>
              <Button variant='info' href={`/surveys/${survey._id}/responses`}>View Responses</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
