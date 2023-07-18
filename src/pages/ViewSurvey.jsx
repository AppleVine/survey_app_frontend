import React, { useParams, useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import { SurveyProvider } from '../components/createSurvey/surveyContext';
import SurveyContainer from '../components/createSurvey/SurveyContainer';
import { viewSurvey } from '../services/surveyServices';
import {useSurveyDispatchContext} from '../components/createSurvey/surveyContext';
import { checkForUser } from '../services/authServices';
import EditContext, { defaultEditContextData } from '../contexts/editContext';

export default async function ViewSurvey() {
    // Load survey from database into state
    let surveyId = useParams();
    const surveyData = await viewSurvey(surveyId);

    const dispatch = useSurveyDispatchContext();

    dispatch({data: surveyData});

    // Check if there is a logged in user
    let isUser = checkForUser();

    // Set edit context to false
    const [edit, setEdit] = useState(defaultEditContextData);
    setEdit(false);


  return (
    <div>
        <SurveyProvider>
          <EditContext.Provider value={{edit, setEdit}} >
            <SurveyContainer />
            {
              // Display edit button for logged in users
              isUser ?
              <Link to={`/surveys/${surveyId}/edit`}>Edit Survey</Link>
              :
              null
            }
          </EditContext.Provider>
        </SurveyProvider>
    </div>
  )
}
