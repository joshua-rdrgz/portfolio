import { render, screen } from '@testing-library/react';
import { sep } from 'path';
import Separator from './Separator';

describe('Separator Utility Component', () => {
  test('is shown on screen', () => {
    render(<Separator backgroundColor='bg-color__dark--accent' />);

    const separator = screen.getByTestId('separator');

    expect(separator).toBeInTheDocument();
    expect(separator).toHaveClass('separator');
    expect(separator).toHaveClass('bg-color__dark--accent');
  });
});
