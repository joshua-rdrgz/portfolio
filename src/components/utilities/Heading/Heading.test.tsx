import { screen, render } from '@testing-library/react';
import Heading from './Heading';
import HeadingType from './HeadingType';

describe('Heading Utility Component', () => {
  test('renders heading tag, size, color, and content correctly', () => {
    produceHeading();

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('heading-size__1');
    expect(heading).toHaveClass('color--black');
    expect(heading).toHaveTextContent('Heading');
  });

  test('renders heading decor correctly', () => {
    produceHeading(undefined, 'lines');
    produceHeading(undefined, 'line-left'); // left: 1
    produceHeading(undefined, 'line-right'); // right: 1
    produceHeading(undefined, 'line-center'); // left: 2, right: 2

    const [headingLines] = screen.getAllByText('Heading');
    const leftDecorDivs = screen.getAllByTestId('heading__left-decor');
    const rightDecorDivs = screen.getAllByTestId('heading__right-decor');

    expect(headingLines).toHaveClass('heading__decor--lines');
    expect(leftDecorDivs.length).toEqual(2); // left: 2
    expect(rightDecorDivs.length).toEqual(2); // right: 2
  });

  test('renders both sub-headings with correct content, text size, and text color', () => {
    const subHeading: HeadingType['subHeading'] = {
      type: 'both',
      textUpper: {
        content: 'upper subheading',
        textSize: 'text-size--large',
        textColor: 'color--black',
      },
      textLower: {
        content: 'lower subheading',
        textSize: 'text-size--xxlarge',
        textColor: 'color--black-50',
      },
    };
    produceHeading(subHeading);

    const upperSubHeading = screen.getByText('upper subheading');
    const lowerSubHeading = screen.getByText('lower subheading');

    expect(upperSubHeading).toHaveTextContent('upper subheading');
    expect(lowerSubHeading).toHaveTextContent('lower subheading');
    expect(upperSubHeading).toHaveClass('text-size--large');
    expect(upperSubHeading).toHaveClass('color--black');
    expect(lowerSubHeading).toHaveClass('text-size--xxlarge');
    expect(lowerSubHeading).toHaveClass('color--black-50');
  });

  test('renders upper sub-heading with correct content, text size, and text color', () => {
    const subHeading: HeadingType['subHeading'] = {
      type: 'upper',
      content: 'upper subheading',
      textSize: 'text-size--medium',
      textColor: 'color--black-90',
    };
    produceHeading(subHeading);

    const upperSubHeading = screen.getByText('upper subheading');
    const lowerSubHeading = screen.queryByText('lower subheading');

    expect(upperSubHeading).toHaveTextContent('upper subheading');
    expect(upperSubHeading).toHaveClass('text-size--medium');
    expect(upperSubHeading).toHaveClass('color--black-90');

    expect(lowerSubHeading).not.toBeInTheDocument();
  });

  test('renders lower sub-heading with correct content, text size, and text color', () => {
    const subHeading: HeadingType['subHeading'] = {
      type: 'lower',
      content: 'lower subheading',
      textSize: 'text-size--small',
      textColor: 'color--black-25',
    };
    produceHeading(subHeading);

    const lowerSubHeading = screen.getByText('lower subheading');
    const upperSubHeading = screen.queryByText('upper subheading');

    expect(lowerSubHeading).toHaveTextContent('lower subheading');
    expect(lowerSubHeading).toHaveClass('text-size--small');
    expect(lowerSubHeading).toHaveClass('color--black-25');

    expect(upperSubHeading).not.toBeInTheDocument();
  });
});

function produceHeading(
  subHeading: HeadingType['subHeading'] | undefined = undefined,
  decor: HeadingType['decor'] | undefined = undefined
) {
  const headingAttributes: HeadingType = {
    Tag: 'h1',
    headingSize: 'heading-size__1',
    headingColor: 'color--black',
    decor: decor,
    subHeading: subHeading,
  };
  render(<Heading {...headingAttributes}>Heading</Heading>);
}
