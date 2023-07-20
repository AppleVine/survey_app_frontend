import { useEffect, useState } from "react";
import Header from "../components/header";
import { getSurveys } from "../services/surveyServices";
import "./ViewSurveys.css";

export default function ViewSurveys() {
  const [surveys, setSurveys] = useState([]);

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
              <h2>{survey.title}</h2>
              <h8>{survey._id}</h8>
            </div>
            <p>{survey.description}</p>
            <h8>Number of Responses: {survey.responses.length}</h8>
          </div>
        ))}
      </div>
    </div>
  );
}
