import Header from "../components/header";
import { useParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { getSurvey, getSurveyResponses } from "../services/responseServices";
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
        surveyResponses.sort((a, b) => new Date(b.dateSubmitted) - new Date(a.dateSubmitted));
        setResponses(surveyResponses);
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

  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-GB");
    return formattedDate;
  };

  const parseMultipleChoiceQuestion = (question, answer) => {
    if (Array.isArray(answer)) {
      const selectedOptions = answer.map((data) => data.text);
      return <Fragment>{selectedOptions.join(", ")}</Fragment>;
    } else {
      return <Fragment>{answer.text}</Fragment>;
    }
  };

  const parseTextQuestion = (answer) => {
    return <Fragment>{answer}</Fragment>;
  };

  const parseResponse = (question, answer) => {
    switch (question.questionType) {
      case "multipleChoiceRadio":
      case "multipleChoiceCheckbox":
        return parseMultipleChoiceQuestion(question, answer);
      case "shortText":
      case "longText":
        return parseTextQuestion(answer);
      default:
        return <Fragment>No answer provided</Fragment>;
    }
  };

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
