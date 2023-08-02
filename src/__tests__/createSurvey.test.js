import { render, screen } from '@testing-library/react';
import EditSurveyContainer from '../components/survey/EditSurveyContainer';
import { EditContextProvider } from '../contexts/editContext';
import { SurveyProvider } from '../contexts/surveyContext';

test('renders the create survey page', () => {
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

// Form containing survey questions is present
expect(screen.getByRole('form')).toBeInTheDocument();

// Default question card is present
let questionsContainer = screen.getByRole('form');
expect(questionsContainer.firstChild).toHaveClass('question-card');

// Remove question button is present
let questionContainer = questionsContainer.firstChild;
expect(questionContainer.firstChild).toHaveClass('remove-button');

// Default question text is present
expect(screen.getByRole('heading', {level: 3})).toHaveTextContent("Insert question text here");

// Question type dropdown is present
expect(screen.getByRole('combobox', {name: 'questionType'})).toBeInTheDocument();
// Default option is selected
expect(screen.getByRole('combobox', {name: 'questionType'})).toHaveValue('Select a question type');
// Correct number of options
expect(screen.getAllByRole('option').length).toBe(5);

// Default question details are present
expect(screen.getByText("Insert question details here")).toBeInTheDocument();
// Remove question details button is present
expect(screen.getByRole('button', {name: "Add Question Details"})).toBeInTheDocument();

// Add question button is present
expect(screen.getByRole('button', {name: "add-question-button"})).toBeInTheDocument();

// Survey Completion message is present and has default text
expect(screen.getByText("Insert survey completion message here.")).toBeInTheDocument();

// Make public toggle is present
expect(screen.getByRole('button', {name: 'make-public-toggle'})).toBeInTheDocument();

// Save new survey button is present
expect(screen.getByRole('button', {name: 'Save Changes'})).toBeInTheDocument();
  });