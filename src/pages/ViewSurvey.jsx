import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSurveyContext } from '../components/createSurvey/surveyContext';
import {useSurveyDispatchContext} from '../components/createSurvey/surveyContext';
import { getSurvey } from '../services/surveyServices';
import { checkForUser } from '../services/authServices';
import ViewSurveyContainer from '../components/createSurvey/ViewSurveyContainer';
import EditContext, { defaultEditContextData } from '../contexts/editContext';

export default function ViewSurvey() {
    // Get survey id from url
    let { surveyId } = useParams();
    // Set up dispatch so we can load the survey data into state
    const dispatch = useSurveyDispatchContext();
    // Set edit context to pass down
    const [edit, setEdit] = useState(defaultEditContextData);
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
        dispatch({type: "loadSurvey", data: surveyData.survey});
      }
  
      fetchSurvey()
      .catch(console.error)
      // eslint-disable-next-line
    },[])

  return (
    <div>
      <EditContext.Provider value={{edit, setEdit}} >
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
      </EditContext.Provider>
    </div>
  )
}
