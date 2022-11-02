import { screen, render } from '@testing-library/react';
import Icon from './Icon';

describe('Icon Utility Component', () => {
  test('renders icon types correctly', () => {
    render(
      <Icon
        type='social'
        svg='./assets/socials/github.svg'
        alt='github logo'
        testId='1'
      />
    );
    render(
      <Icon
        type='skill'
        svg='./assets/skills/html.svg'
        alt='html logo'
        testId='2'
      />
    );
    render(
      <Icon
        type='memoji'
        svg='./assets/memoji/memoji-lightbulb.svg'
        alt='memoji lightbulb'
        testId='3'
      />
    );

    const [social] = screen.getAllByTestId('1');
    const skill = screen.getByTestId('2');
    const memoji = screen.getByTestId('3');

    expect(social).toHaveClass('icon__figure--social');
    expect(skill).toHaveClass('icon__figure--skill');
    expect(memoji).toHaveClass('icon__figure--memoji');
  });

  test('renders src and alt attributes correctly', () => {
    render(
      <Icon
        type='memoji'
        svg='./assets/memoji/memoji-lightbulb.svg'
        alt='memoji lightbulb'
        testId='memoji'
      />
    );

    const memoji = screen.getByAltText('memoji lightbulb');

    expect(memoji).toHaveAttribute('alt', 'memoji lightbulb');
    expect(memoji).toHaveAttribute(
      'src',
      './assets/memoji/memoji-lightbulb.svg'
    );
  });

  test('renders captions correctly', () => {
    render(
      <Icon
        type='social'
        svg='./assets/socials/github.svg'
        alt='github logo'
        caption='caption test'
        testId='1'
      />
    );
    render(
      <Icon
        type='memoji'
        svg='./assets/memoji/memoji-lightbulb.svg'
        alt='memoji lightbulb'
        testId='2'
      />
    );

    const pElements = document.querySelectorAll('p');

    expect(pElements.length).toEqual(1);
  });
});
