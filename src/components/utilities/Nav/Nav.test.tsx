import { screen, render } from '@testing-library/react';
import Nav from './Nav';

describe('Nav Utility Component', () => {
  test('correctly renders header and footer navs', () => {
    render(<Nav type='header' backgroundColor='bg-color--black' />);
    render(<Nav type='footer' backgroundColor='bg-color--black' />);

    const [navOne, navTwo] = screen.getAllByRole('navigation');
    const headerMobileCheckbox = screen.getAllByRole('checkbox');
    const navLinks = screen.getAllByRole('link');

    expect(navOne).toHaveClass('header-nav');
    expect(navTwo).toHaveClass('footer-nav');

    expect(headerMobileCheckbox.length).toEqual(1);

    expect(
      navLinks.filter((link) => link.classList.contains('header-nav__link'))
        .length
    ).toEqual(4);
  });
});
