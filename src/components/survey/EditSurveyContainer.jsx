import React, {useEffect} from 'react'
import { useLocalStorage } from 'react-use'
import { useSurveyContext, useSurveyDispatchContext } from './surveyContext'
import {useEditDispatchContext} from '../../contexts/editContext'
import MakePublicToggle from './MakePublicToggle'
import SurveyTitle from './SurveyTitle'
import SurveyDescription from './SurveyDescription'
import SurveyIntroText from './SurveyIntroText'
import SurveyQuestionsContainer from './SurveyQuestionsContainer'
import SurveyCompletionMessage from './SurveyCompletionMessage'

export default function EditSurveyContainer() {
  const editDispatch = useEditDispatchContext();

  // Set edit state to true for all subcomponents
  useEffect(() => {
    editDispatch({data: true})
    // eslint-disable-next-line
  }, []);

  const state = useSurveyContext();
  const dispatch = useSurveyDispatchContext();

  // Create keys for storing data in local storage
  const [surveyDraft, setSurveyDraft] = useLocalStorage("new-survey-draft", "");

  // On page load- check if there is saved data and if the user wants to restore it
  useEffect(() => {
    if (surveyDraft) {
      if (window.confirm("Restore saved draft?")) {
        dispatch({type: "loadDraft", data: JSON.parse(surveyDraft)})
      } else {
        // Erase stored data
        setSurveyDraft("");
      }
    }
    // eslint-disable-next-line
  }, []);

  // Store current state in local storage
  useEffect(() => {
    // Save the current state once every ten seconds
    const saveToLocal = setTimeout(() => {
      setSurveyDraft(JSON.stringify(state));
    }, 10000)
    return () => clearTimeout(saveToLocal)
    // eslint-disable-next-line
  }, [state])

  return (
    <div>
        <MakePublicToggle />
        <SurveyTitle />
        <SurveyDescription />
        <SurveyIntroText />
        <SurveyQuestionsContainer />
        <SurveyCompletionMessage />
    </div>
  )
}
