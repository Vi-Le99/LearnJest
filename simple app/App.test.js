import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import{replaceCamelWithSpace} from './App';

beforeEach(()=>{
  render(<App />);

  
});

test('button has correct initial color', () => {

  // find an element with a role of button and text of 'Change to Midnight Blue'
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue'});

  // expect the background color to be Medium Violet Red
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed'})

  // click button
  fireEvent.click(colorButton);

  //expect the background color to be Midnight Blue
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});

  //expect the button text to be 'Change to Medium Violet Red'
  expect(colorButton.textContent).toBe('Change to Medium Violet Red');
});

test('initial conditions', () => {
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue'});
  const checkbox=screen.getByRole('checkbox', { name: 'Disabled button'});

  expect(colorButton).toBeEnabled();
  expect(checkbox).not.toBeChecked();
});

test('Checkbox disables button on first click and enables on second click', () => {
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue'});
  const checkbox=screen.getByRole('checkbox', { name: 'Disabled button'});

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('check background of button', () => {
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue'});
  const checkbox=screen.getByRole('checkbox', { name: 'Disabled button'});

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});
});

test('space before camel-case capital letters', () => {
  const colorButton = screen.getByRole('button');
  expect(colorButton.textContent).toBe('Change to Medium Violet Red');
  fireEvent.click(colorButton);
  expect(colorButton.textContent).toBe('Midnight Blue');
});