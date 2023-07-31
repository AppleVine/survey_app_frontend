import { useEffect, useState } from "react";
import Header from "../components/header";
import { getStaffSurveys } from "../services/surveyServices";
import Button from 'react-bootstrap/Button';
import "./ViewSurveys.css";
import { useParams } from "react-router-dom";

export default function ViewSurveys() {
  const [surveys, setSurveys] = useState([]);
  const { staffid } = useParams();

  useEffect(() => {
    const fetchSurveys = async () => {
      try {

        const theSurveysData = await getStaffSurveys(staffid);
        const theSurveys = theSurveysData; // Use the entire data object, which contains the surveys array
        // Sort the surveys array based on dateSubmitted in descending order
        theSurveys.sort((a, b) => new Date(b.dateSubmitted) - new Date(a.dateSubmitted));
        setSurveys(theSurveys);

      } catch (error) {
        console.error(error);

      }
    };
    fetchSurveys();
  }, [staffid]);

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
              <Button variant='info' href={`/surveys/${survey._id}`}>View Survey</Button>
              <Button variant='info' href={`/responses/${survey._id}`}>View Responses</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
