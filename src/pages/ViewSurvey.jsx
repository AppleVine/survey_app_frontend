import React, { useParams } from 'react'
import { SurveyProvider } from '../components/createSurvey/surveyContext';
import SurveyContainer from '../components/createSurvey/SurveyContainer';
import { viewSurvey } from '../services/surveyServices';
import {useSurveyDispatchContext} from '../components/createSurvey/surveyContext';

export default async function ViewSurvey() {
    // Load survey from database into state
    let surveyId = useParams();
    const surveyData = await viewSurvey(surveyId);

    const dispatch = useSurveyDispatchContext();

    dispatch(surveyData);


  return (
    <div>
        <SurveyProvider>
            <SurveyContainer />
        </SurveyProvider>
    </div>
  )
}
