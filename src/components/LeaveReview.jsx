import Header from "./header";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useSurveyContext } from "../contexts/surveyContext";


export default function LeaveReview() {
  const surveyState = useSurveyContext();
  let reviewLink = surveyState.data.reviewLink;

    const handleButtonClick = () => {
      // Check link is formatted correctly
      if (reviewLink.slice(0,3) !== "http") {
        reviewLink = "https://" + reviewLink;
      }
      window.location.replace(reviewLink);
    };
  
    return (
      <div>
        <Header />
  
        <div className="leaveReview-content">
          <h3>{surveyState.data.completionMessage}</h3>
  
          <div className="buttons">
            {surveyState.data.reviewLink? <Button className="account" variant="primary" onClick={handleButtonClick}>Leave Review</Button> : null}
          </div>
        </div>
      </div>
    );
  }