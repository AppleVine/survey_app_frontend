import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { SurveyProvider, useSurveyDispatchContext } from '../components/createSurvey/surveyContext';
import SurveyContainer from '../components/createSurvey/SurveyContainer';
import EditContext from '../contexts/editContext';
import { viewSurvey } from '../services/surveyServices';

export default function EditSurvey() {
  // Get survey id from url
  let surveyId = useParams();
  // Load data from db
  let surveyData = viewSurvey(surveyId);
  // Update survey context with data
  const dispatch = useSurveyDispatchContext();

  dispatch({data: surveyData});
  // Set edit context to true
  const {edit, setEdit} = useContext(EditContext);
  setEdit(true);

  return (
    <div>
      <SurveyProvider>
        <EditContext.Provider>
          <SurveyContainer />
        </EditContext.Provider>
      </SurveyProvider>
    </div>
  )
}