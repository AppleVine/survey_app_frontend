import React from 'react';
import MultipleChoiceRadio from './MultipleChoiceRadio';
import MultipleChoiceCheckbox from './MultipleChoiceCheckbox';
import ShortTextResponse from './ShortText';
import LongTextResponse from './LongText';

export default function QuestionResponse({ id, type, state, dispatch }) {
    switch (type) {
        case "multipleChoiceRadio":
            return <MultipleChoiceRadio id={ id } state={ state } dispatch={ dispatch } />
        case "multipleChoiceCheckBox":
            return <MultipleChoiceCheckbox id={ id } state={ state } dispatch={ dispatch } />
        case "shortText":
            return <ShortTextResponse />
        case "longText":
            return <LongTextResponse />
        default:
            return <p>Select a question type.</p>
    }
}
