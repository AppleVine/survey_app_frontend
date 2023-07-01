import React from 'react';
import MultipleChoiceRadio from './MultipleChoiceRadio';
import MultipleChoiceCheckbox from './MultipleChoiceCheckbox';
import ShortTextResponse from './ShortText';
import LongTextResponse from './LongText';

export default function QuestionResponse(props) {
    const {questionType} = props;
    switch (questionType) {
        case "multiple-choice-radio":
            return <MultipleChoiceRadio />
        case "multiple-choice-checkbox":
            return <MultipleChoiceCheckbox />
        case "short-text":
            return <ShortTextResponse />
        case "long-text":
            return <LongTextResponse />
    }
}
