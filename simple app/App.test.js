import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpace } from './App';

beforeEach(() => {
  render(<App />);
});

test('button has correct initial color', () => {

  // find an element with a role of button and text of 'Change to Midnight Blue'
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  // expect the background color to be Medium Violet Red
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

  // click button
  fireEvent.click(colorButton);

  //expect the background color to be Midnight Blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  //expect the button text to be 'Change to Medium Violet Red'
  expect(colorButton.textContent).toBe('Change to Medium Violet Red');
});

test('initial conditions', () => {

  // find an element with a role of button and text of 'Change to Midnight Blue'
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  // find an element with a role of checkbox and text of 'Disabled button'
  const checkbox = screen.getByRole('checkbox', { name: 'Disabled button' });

  // expect the colorButton is enabled
  expect(colorButton).toBeEnabled();

  // expect the checkbox is not checked
  expect(checkbox).not.toBeChecked();
});

test('Checkbox disables button on first click and enables on second click', () => {

  // find an element with a role of button and text of 'Change to Midnight Blue'
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  // find an element with a role of checkbox and text of 'Disabled button'
  const checkbox = screen.getByRole('checkbox', { name: 'Disabled button' });

  // click a checkbox disabled button
  fireEvent.click(checkbox);

  // expect the color button is disabled
  expect(colorButton).toBeDisabled();

  // click a checkbox
  fireEvent.click(checkbox);

  // expect the colorButton is enabled
  expect(colorButton).toBeEnabled();
});

test('check background of button when button is disable and enable', () => {

  // find an element with a role of button and text of 'Change to Midnight Blue'
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  // find an element with a role of checkbox and text of 'Disabled button'
  const checkbox = screen.getByRole('checkbox', { name: 'Disabled button' });

  // click a checkbox
  fireEvent.click(checkbox);

  // expect the colorButton has background color is gray
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  // click a checkbox
  fireEvent.click(checkbox);

  // expect the colorButton has background color is medium violet red
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('space before camel-case capital letters', () => {

  // expect function replaceCamelWithSpace is well working
  expect(replaceCamelWithSpace("LightRed")).toBe("Light Red");
  expect(replaceCamelWithSpace("darkBlue")).toBe("dark Blue");
});