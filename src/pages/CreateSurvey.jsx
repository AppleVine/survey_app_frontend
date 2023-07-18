import React, {useState} from 'react';
import { SurveyProvider } from '../components/createSurvey/surveyContext';
import EditSurveyContainer from '../components/createSurvey/EditSurveyContainer';
import EditContext, { defaultEditContextData } from '../contexts/editContext';

export default function CreateSurvey() {
  // Set edit context to pass down
  let [edit, setEdit] = useState(defaultEditContextData);

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