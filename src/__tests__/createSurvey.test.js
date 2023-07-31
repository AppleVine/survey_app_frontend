import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EditSurveyContainer from '../components/survey/EditSurveyContainer';
import { EditContextProvider } from '../contexts/editContext';
import { SurveyProvider } from '../contexts/surveyContext';
import { act } from 'react-test-renderer';

// Fix structuredClone problem
import structuredClone from "@ungap/structured-clone";

global.structuredClone = structuredClone;

test('renders the create/edit survey form', () => {
    render(
        <EditContextProvider>
            <SurveyProvider>
                <EditSurveyContainer />
            </SurveyProvider>
        </EditContextProvider>
    );

    // Survey Title is present and has default text
    expect(screen.getByRole('heading',{name: "Insert Survey Title Here"})).toBeInTheDocument();

    // Survey Description is present and has default text
    expect(screen.getByText("Insert survey description here.")).toBeInTheDocument();

    // Survey Introduction is present and has default text
    expect(screen.getByText("Insert survey intro here.")).toBeInTheDocument();

    // Default question card is present
    let questionsContainer = screen.getByRole('form');
    expect(questionsContainer.firstChild).toHaveClass('question-card');

    // Remove question button is present
    let questionContainer = questionsContainer.firstChild.firstChild;
    expect(questionContainer.firstChild.firstChild.firstChild).toHaveClass('remove-button');

    // Default question text is present
    expect(screen.getByRole('heading', {level: 3, name: "Insert question text here"})).toBeInTheDocument();

    // Question type dropdown is present
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    // Correct number of options
    expect(screen.getAllByRole('option').length).toBe(5);

    // Default question details are present
    expect(screen.getByText("Insert question details here")).toBeInTheDocument();
    // Remove question details button is present
    expect(screen.getByRole('button', {name: "Remove Question Details"})).toBeInTheDocument();

    // Add question button is present
    expect(screen.getByRole('button', {name: 'add-question'})).toBeInTheDocument();

    // Survey Completion message is present and has default text
    expect(screen.getByText("Insert survey completion message here.")).toBeInTheDocument();

    // Make public toggle is present
    expect(screen.getByRole('checkbox', {name: 'Make Public'})).toBeInTheDocument();
  });

test('Can select a question type from dropdown', async () => {
    const user = userEvent.setup();
    render(
        <EditContextProvider>
            <SurveyProvider>
                <EditSurveyContainer />
            </SurveyProvider>
        </EditContextProvider>
    );

    let dropdown = screen.getByRole('combobox');
    
    await act(async () => {
        await user.selectOptions(dropdown, "Multiple Choice (Radio)");
    })

    // Correct option is selected
    expect(screen.getByRole('option', {name: 'Multiple Choice (Radio)'}).selected).toBe(true);

    // Multiple choice response component is displayed
    expect(screen.getAllByRole('radio')[0]).toBeInTheDocument();

    await act(async () => {
        await user.selectOptions(dropdown, "Multiple Choice (Checkbox)");
    })

    // Correct option is selected
    expect(screen.getByRole('option', {name: 'Multiple Choice (Checkbox)'}).selected).toBe(true);

    // Multiple choice response component is displayed
    expect(screen.getAllByRole('checkbox')[0]).toBeInTheDocument();

    await act(async () => {
        await user.selectOptions(dropdown, "Short Text");
    })

    // Correct option is selected
    expect(screen.getByRole('option', {name: 'Short Text'}).selected).toBe(true);

    // Text input response component is displayed
    expect(screen.getByRole('textbox')).toBeInTheDocument();

    await act(async () => {
        await user.selectOptions(dropdown, "Long Text");
    })

    // Correct option is selected
    expect(screen.getByRole('option', {name: 'Long Text'}).selected).toBe(true);

    // Text input response component is displayed
    expect(screen.getByRole('textbox')).toBeInTheDocument();
})

test('Can edit and add multiple choice options', async () => {
    const user = userEvent.setup();
    render(
        <EditContextProvider>
            <SurveyProvider>
                <EditSurveyContainer />
            </SurveyProvider>
        </EditContextProvider>
    );

    let dropdown = screen.getByRole('combobox');
    
    await act(async () => {
        await user.selectOptions(dropdown, "Multiple Choice (Radio)");
    })

    // Can add new option
    await act(async () => {
        await user.click(screen.getByRole('button', {name: 'add-option'}));
    })

    expect(screen.getAllByText('Enter an option').length).toBe(4)

    await act(async () => {
        await user.click(screen.getAllByText('Enter an option')[0]);
    })

    // Check that input field appeared
    let optionInput = screen.getByRole('textbox');
    expect(optionInput).toBeInTheDocument();

    // Can enter text into input field
    fireEvent.change(optionInput, { target: { value: 'Yes' } });
    expect(optionInput.value).toBe('Yes');

    // Input field returns to label when user presses enter, and preserves the input
    fireEvent.keyDown(optionInput, { key: "Enter", code: 13, charCode: 13 });
    expect(screen.getByText('Yes')).toBeInTheDocument();

})