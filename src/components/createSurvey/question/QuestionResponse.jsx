import React, { useEffect } from 'react';
import { useSurveyContext, useSurveyDispatchContext } from '../surveyContext';
import MultipleChoiceRadio from './MultipleChoiceRadio';
import MultipleChoiceCheckbox from './MultipleChoiceCheckbox';
import ShortTextResponse from './ShortText';
import LongTextResponse from './LongText';

export default function QuestionResponse({ id }) {
    const state = useSurveyContext();
    const dispatch = useSurveyDispatchContext();

    // Trigger rerender on state change
    useEffect(() => {},[state])

    const type = state.data.questions[id].data.questionType
    switch (type) {
        case "multipleChoiceRadio":
            return <MultipleChoiceRadio id={ id } />
        case "multipleChoiceCheckbox":
            return <MultipleChoiceCheckbox id={ id } />
        case "shortText":
            return <ShortTextResponse />
        case "longText":
            return <LongTextResponse id={ id } />
        default:
            return <p>Select a question type.</p>
    }
}
