import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text Utility Component', () => {
  test('renders content, font size, color, and text alignment correctly', () => {
    render(
      <Text fontSize='text-size--large' color='color--black-15'>
        Sample Text 1
      </Text>
    );
    render(
      <Text fontSize='text-size--small' color='color__light--accent' textClass='text-align--center'>
        Sample Text 2
      </Text>
    );

    const [textOne, textTwo] = screen.getAllByText('Sample Text', {
      exact: false,
    });
    const textOneClasses = Array.from(textOne.classList).join(' ');

    expect(textOne).toHaveTextContent('Sample Text 1');
    expect(textOne).toHaveClass('text-size--large');
    expect(textOne).toHaveClass('text-size--large');
    expect(textOne).toHaveClass('color--black-15');
    expect(textOneClasses).not.toContain('text-align');

    expect(textTwo).toHaveTextContent('Sample Text 2');
    expect(textTwo).toHaveClass('text-size--small');
    expect(textTwo).toHaveClass('color__light--accent');
    expect(textTwo).toHaveClass('text-align--center');
  });
});
