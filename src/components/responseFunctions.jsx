import { Fragment } from "react";

export const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-GB");
    return formattedDate;
  };

export const parseMultipleChoiceQuestion = (answer) => {
    if (Array.isArray(answer)) {
      const selectedOptions = answer.map((data) => data.text);
      return <Fragment>{selectedOptions.join(", ")}</Fragment>;
    } else {
      return <Fragment>{answer.text}</Fragment>;
    }
  };

export const parseTextQuestion = (answer) => {
    return <Fragment>{answer}</Fragment>;
  };

export const parseResponse = (question, answer) => {
    switch (question.questionType) {
      case "multipleChoiceRadio":
      case "multipleChoiceCheckbox":
        return parseMultipleChoiceQuestion(answer);
      case "shortText":
      case "longText":
        return parseTextQuestion(answer);
      default:
        return <Fragment>No answer provided</Fragment>;
    }
  };

export const sortResponses = (responseArray) => {
    return responseArray.sort((a, b) => new Date(b.dateSubmitted) - new Date(a.dateSubmitted));
}