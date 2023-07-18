import React, {useState} from 'react';
import { SurveyProvider } from '../components/createSurvey/surveyContext';
import SurveyContainer from '../components/createSurvey/SurveyContainer';
import EditContext, { defaultEditContextData } from '../contexts/editContext';

export default function CreateSurvey() {
  // Set edit context to true
  let [edit, setEdit] = useState(defaultEditContextData);
  // setEdit(true);   <--- Triggers infinite rerender

  return (
    <div>
      <SurveyProvider>
        <EditContext.Provider value={{edit, setEdit}} >
          <SurveyContainer />
        </EditContext.Provider>
      </SurveyProvider>
    </div>
  )
}