import Header from "../components/header";
import { useParams } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { getSurvey, getSurveyResponses } from "../services/responseServices";
import "./SurveyResponses.css"

export default function SurveyResponses() {
  const { surveyID } = useParams();
  const [responses, setResponses] = useState([]);
  const [survey, setSurvey] = useState([]);

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
                  {typeof response.answers[index] === 'string'
                    ? response.answers[index]
                    : parseMultiChoice(response.answers[index])
                  }
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
