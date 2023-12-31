import React, { useEffect } from 'react';
import { useSurveyContext } from '../../../contexts/surveyContext';
import MultipleChoice from './MultipleChoice';
import ShortTextResponse from './ShortText';
import LongTextResponse from './LongText';

export default function QuestionResponse({ id }) {
    const state = useSurveyContext();

    // Trigger rerender on state change
    useEffect(() => {},[state])

    const type = state.data.questions[id].data.questionType
    switch (type) {
        case "multipleChoiceRadio":
            return <MultipleChoice id={ id } type={"radio"} />
        case "multipleChoiceCheckbox":
            return <MultipleChoice id={ id } type={"checkbox"} />
        case "shortText":
            return <ShortTextResponse id={ id } />
        case "longText":
            return <LongTextResponse id={ id } />
        default:
            return <h3>Select a question type.</h3>
    }
}
