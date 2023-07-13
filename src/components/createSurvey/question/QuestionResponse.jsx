import React from 'react';
import MultipleChoiceRadio from './MultipleChoiceRadio';
import MultipleChoiceCheckbox from './MultipleChoiceCheckbox';
import ShortTextResponse from './ShortText';
import LongTextResponse from './LongText';

export default function QuestionResponse({ questionState, questionDispatch }) {
    switch (questionState.data.questionType) {
        case "multipleChoiceRadio":
            return <MultipleChoiceRadio questionState={ questionState } questionDispatch={ questionDispatch } />
        case "multipleChoiceCheckBox":
            return <MultipleChoiceCheckbox questionState={ questionState } questionDispatch={ questionDispatch } />
        case "shortText":
            return <ShortTextResponse />
        case "longText":
            return <LongTextResponse />
        default:
            return <p>Select a question type.</p>
    }
}
