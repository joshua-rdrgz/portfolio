import { render, screen } from '@testing-library/react';
import Textbox from './Textbox';
import Text from '../Text/Text';

describe('Textbox Utility Component', () => {
  test('renders content, border color, and background color correctly', () => {
    render(
      <Textbox
        borderColor='border-color__light--accent-medium'
        backgroundColor='bg-color--black-75'
      >
        <Text fontSize='text-size--large' color='color--black-10'>
          Testing
        </Text>
      </Textbox>
    );

    const textbox = screen.getByTestId('textbox-figure');
    const text = screen.getByText('Testing');

    expect(text).toBeInTheDocument();
    expect(textbox).toHaveClass('border-color__light--accent-medium');
    expect(textbox).toHaveClass('bg-color--black-75');
  });
});
