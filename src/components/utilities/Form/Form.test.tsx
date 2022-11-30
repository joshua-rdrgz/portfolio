import { screen, render, getByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Form Utility Component', () => {
  test('successfully shows error messages and keeps button disabled when form is invalid', () => {
    render(<Form />);

    const [nameInput, emailInput, messageInput] =
      screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    userEvent.click(nameInput);
    userEvent.click(emailInput);
    userEvent.click(messageInput);
    userEvent.click(document.body); // clicks away from message, triggering onBlurHandler.

    const [nameError, emailError, messageError] = screen.getAllByText(
      'Please Enter Valid',
      { exact: false }
    );

    expect(nameError).toHaveClass('form__error-text');
    expect(emailError).toHaveClass('form__error-text');
    expect(messageError).toHaveClass('form__error-text');
    expect(button).toHaveAttribute('disabled');
  });

  test('successfully enables button and hides error messages when form is valid', () => {
    render(<Form />);

    const [nameInput, emailInput, messageInput] =
      screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    userEvent.type(nameInput, 'testing');
    userEvent.type(emailInput, 'test@testing.com');
    userEvent.type(messageInput, 'This is a test.');

    const [nameError, emailError, messageError] = screen.queryAllByText(
      'Please Enter Valid',
      { exact: false }
    );

    // undefined === they don't exist, queryAllByText returns undefined if it doesn't exist
    expect(nameError).toEqual(undefined);
    expect(emailError).toEqual(undefined);
    expect(messageError).toEqual(undefined);

    expect(button).not.toHaveAttribute('disabled');
  });
});
