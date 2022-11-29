import { screen, render } from '@testing-library/react';
import Button from './Button';

describe('Button Utility Component', () => {
  test('renders primary button correctly', () => {
    render(
      <Button
        Tag='button'
        btnInfo={{
          type: 'primary',
          textColor: 'color--black-5',
          btnColor: 'bg-color__light--accent',
          hoverBgColor: 'hover-bg-color__light--accent-medium',
          main: true,
        }}
      >
        Primary Main Button
      </Button>
    );
    render(
      <Button
        Tag='button'
        btnInfo={{
          type: 'primary',
          textColor: 'color--white',
          btnColor: 'bg-color__light--accent-medium',
          hoverBgColor: 'hover-bg-color__light--accent',
        }}
      >
        Primary Button
      </Button>
    );

    const [buttonOne, buttonTwo] = screen.getAllByText('Button', {
      exact: false,
    });

    expect(buttonOne).toHaveClass('btn--primary');
    expect(buttonTwo).toHaveClass('btn--primary');

    expect(buttonOne).toHaveClass('btn--main');
    expect(buttonTwo).not.toHaveClass('btn--main');

    expect(buttonOne).toHaveClass('color--black-5');
    expect(buttonTwo).toHaveClass('color--white');

    expect(buttonOne).toHaveClass('bg-color__light--accent');
    expect(buttonTwo).toHaveClass('bg-color__light--accent-medium');

    expect(buttonOne).toHaveClass('hover-bg-color__light--accent-medium');
    expect(buttonTwo).toHaveClass('hover-bg-color__light--accent');
  });

  test('renders secondary button correctly', () => {
    render(
      <Button
        Tag='button'
        btnInfo={{
          type: 'secondary',
          textColor: 'color--black-5',
          btnColor: 'border-color__light--accent',
          hoverBgColor: 'hover-bg-color__light--accent-medium',
        }}
      >
        Secondary Button
      </Button>
    );

    const btn = screen.getByText('Secondary Button');

    expect(btn).toHaveClass('btn--secondary');
    expect(btn).toHaveClass('color--black-5');
    expect(btn).toHaveClass('border-color__light--accent');
    expect(btn).toHaveClass('hover-bg-color__light--accent-medium');
  });
});
