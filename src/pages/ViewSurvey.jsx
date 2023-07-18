import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SurveyProvider } from '../components/createSurvey/surveyContext';
import ViewSurveyContainer from '../components/createSurvey/ViewSurveyContainer';
import { getSurvey } from '../services/surveyServices';
import {useSurveyDispatchContext} from '../components/createSurvey/surveyContext';
import { checkForUser } from '../services/authServices';
import EditContext, { defaultEditContextData } from '../contexts/editContext';

export default async function ViewSurvey() {
    // Load survey from database into state
    // let { surveyId } = useParams();
    // const surveyData = await getSurvey(surveyId);
    let surveyId = null;
    let surveyData = null;

    const dispatch = useSurveyDispatchContext();

    dispatch({data: surveyData});

    // Check if there is a logged in user
    let isUser = checkForUser();

    // Set edit context to pass down
    const [edit, setEdit] = useState(defaultEditContextData);


  return (
    <div>
        <SurveyProvider>
          <EditContext.Provider value={{edit, setEdit}} >
            <ViewSurveyContainer setEdit={setEdit} />
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
        </SurveyProvider>
    </div>
  )
}
