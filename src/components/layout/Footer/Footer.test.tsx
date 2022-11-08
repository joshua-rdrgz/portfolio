import { screen, render } from "@testing-library/react";
import Footer from "./Footer";

describe('Header Layout Component', () => {
  test('correctly renders background color', () => {
    render(<Footer backgroundColor='bg-color__light--accent-dark' />);

    const footer = screen.getByRole('contentinfo'); // footer tag

    expect(footer).toHaveClass('bg-color__light--accent-dark');
  });
});