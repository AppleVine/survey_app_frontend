import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { SurveyProvider, useSurveyDispatchContext } from '../components/createSurvey/surveyContext';
import EditSurveyContainer from '../components/createSurvey/EditSurveyContainer';
import EditContext from '../contexts/editContext';
import { getSurvey } from '../services/surveyServices';

export default function EditSurvey() {
  // Get survey id from url
  let surveyId = useParams();
  // Load data from db
  let surveyData = getSurvey(surveyId);
  // Update survey context with data
  const dispatch = useSurveyDispatchContext();

  dispatch({data: surveyData});

  const {edit, setEdit} = useContext(EditContext);

  return (
    <div>
      <SurveyProvider>
        <EditContext.Provider value={{edit, setEdit}} >
          <EditSurveyContainer setEdit={setEdit} />
        </EditContext.Provider>
      </SurveyProvider>
    </div>
  )
}