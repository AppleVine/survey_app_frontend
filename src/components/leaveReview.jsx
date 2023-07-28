import Header from "../components/header";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


export default function LeaveReview() {

    const handleButtonClick = () => {
      window.location.href = 'https://google.com';
    };
  
    return (
      <div>
        <Header />
  
        <div className="leaveReview-content">
          <h3>
            We appreciate your response! <br />
            Please consider leaving a <br />
            review on Google maps! <br />
          </h3>
  
          <div className="buttons">
            <Button className="account" variant="primary" onClick={handleButtonClick}>Leave Review</Button>
            <Button className="account" variant="primary" onClick={handleButtonClick}>Close Tab</Button>
          </div>
        </div>
      </div>
    );
  }