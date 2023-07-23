import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {useSurveyDispatchContext} from '../components/survey/surveyContext';
import { getSurvey } from '../services/surveyServices';
import { checkForUser } from '../services/authServices';
import ViewSurveyContainer from '../components/survey/ViewSurveyContainer';

export default function ViewSurvey() {
    // Get survey id from url
    let { surveyId } = useParams();
    // Set up dispatch so we can load the survey data into state
    const dispatch = useSurveyDispatchContext();
    // Track whether or not there is a logged in user
    let isUser = false;

    useEffect(() => {
      // Check if there is a logged in user
      // eslint-disable-next-line
      isUser = checkForUser();
    },[])

    useEffect(() => {
      // Get survey data and dispatch it into the state
      const fetchSurvey = async () => {
        const surveyData = await getSurvey(surveyId);
        // Reformat question array
        let questionData = surveyData.survey.questions;
        let questionArray = [];
        for (let question of questionData) {
          question = {data: question};
          questionArray.push(question);
        }
        surveyData.survey.questions = questionArray;
        dispatch({type: "loadSurvey", data: surveyData.survey});
      }
  
      fetchSurvey()
      .catch(console.error)
      // eslint-disable-next-line
    },[])

  return (
    <div>
      <ViewSurveyContainer />
      <div>
        {
          // Display edit button for logged in users
          isUser ?
          <Link to={`/surveys/${surveyId}/edit`}>Edit Survey</Link>
          :
          null
        }
      </div>
    </div>
  )
}
