import React from 'react';
import MultipleChoiceRadio from './MultipleChoiceRadio';
import MultipleChoiceCheckbox from './MultipleChoiceCheckbox';
import ShortTextResponse from './ShortText';
import LongTextResponse from './LongText';

export default function QuestionResponse({ id, type }) {
    switch (type) {
        case "multipleChoiceRadio":
            return <MultipleChoiceRadio id={ id } />
        case "multipleChoiceCheckBox":
            return <MultipleChoiceCheckbox id={ id } />
        case "shortText":
            return <ShortTextResponse />
        case "longText":
            return <LongTextResponse />
        default:
            return <p>Select a question type.</p>
    }
}
