import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSurveyDispatchContext } from '../components/createSurvey/surveyContext';
import { getSurvey } from '../services/surveyServices';
import { checkLoginAndRedirect } from '../services/authServices';
import EditSurveyContainer from '../components/createSurvey/EditSurveyContainer';
import SaveEditedSurveyButton from '../components/createSurvey/SaveEditedSurveyButton';

export default function EditSurvey() {
  // Redirect to login page if not logged in
  useEffect(() => {
    checkLoginAndRedirect();
  }, []);

  // Get survey id from url
  let { surveyId } = useParams();
  // Set up dispatch so we can load the survey data into state
  const dispatch = useSurveyDispatchContext();

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
        <EditSurveyContainer  />
        <SaveEditedSurveyButton />
    </div>
  )
}