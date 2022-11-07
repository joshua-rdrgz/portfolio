import { screen, render } from "@testing-library/react";
import Header from "./Header";

describe('Header Layout Component', () => {
  test('correctly renders background color', () => {
    render(<Header backgroundColor='bg-color__light--accent-dark' />);

    const header = screen.getByTestId('header');

    expect(header).toHaveClass('bg-color__light--accent-dark');
  });
});