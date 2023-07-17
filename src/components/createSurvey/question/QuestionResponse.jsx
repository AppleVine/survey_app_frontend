import React from 'react';
import MultipleChoiceRadio from './MultipleChoiceRadio';
import MultipleChoiceCheckbox from './MultipleChoiceCheckbox';
import ShortTextResponse from './ShortText';
import LongTextResponse from './LongText';

export default function QuestionResponse({ id, type, questionState, setQuestionState }) {
    switch (type) {
        case "multipleChoiceRadio":
            return <MultipleChoiceRadio id={ id } questionState={questionState} setQuestionState={setQuestionState} />
        case "multipleChoiceCheckBox":
            return <MultipleChoiceCheckbox id={ id } questionState={questionState} setQuestionState={setQuestionState} />
        case "shortText":
            return <ShortTextResponse />
        case "longText":
            return <LongTextResponse />
        default:
            return <p>Select a question type.</p>
    }
}
