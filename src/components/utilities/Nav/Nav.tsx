import React, { useContext, useRef } from 'react';
import ThemeContext from '../../../store/theme-context';
import { backgroundColors } from '../../../types/colors';
import Socials from '../Socials/Socials';

interface NavType {
  type: 'header' | 'footer';
  backgroundColor: backgroundColors;
}

const Nav: React.FC<NavType> = ({ type, backgroundColor }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const checkboxRef = useRef<HTMLInputElement | null>(null);

  const onClickHandler = () => {
    const checkbox = checkboxRef.current;
    checkbox?.checked && (checkbox.checked = false);
  };

  return (
    <>
      {type === 'header' && (
        <>
          <input
            type='checkbox'
            id='mobile-menu'
            className={`header-nav__checkbox`}
            ref={checkboxRef}
          />
          <label htmlFor='mobile-menu' className={`header-nav__icon-container`}>
            <span className={`header-nav__icon`}>&nbsp;</span>
          </label>
        </>
      )}
      <nav className={`nav ${type}-nav`}>
        <Socials type='hf' backgroundColor={backgroundColor} />
        <ul className={`nav__ul ${type}-nav__ul ${backgroundColor}`}>
          <li className={`nav__item`}>
            <a
              href='#skills'
              className={`nav__link ${
                type === 'header' ? 'header-nav__link' : ''
              } hover-underline__${
                isDarkMode ? 'dark' : 'light'
              }--accent-medium`}
              onClick={onClickHandler}
            >
              SKILLS
            </a>
          </li>
          <li className={`nav__item`}>
            <a
              href='#projects'
              className={`nav__link ${
                type === 'header' ? 'header-nav__link' : ''
              } hover-underline__${
                isDarkMode ? 'dark' : 'light'
              }--accent-medium`}
              onClick={onClickHandler}
            >
              PROJECTS
            </a>
          </li>
          <li className={`nav__item`}>
            <a
              href='#about'
              className={`nav__link ${
                type === 'header' ? 'header-nav__link' : ''
              } hover-underline__${
                isDarkMode ? 'dark' : 'light'
              }--accent-medium`}
              onClick={onClickHandler}
            >
              ABOUT
            </a>
          </li>
          <li className={`nav__item`}>
            <a
              href='#contact'
              className={`nav__link nav__link--CTA ${
                type === 'header' ? 'header-nav__link' : ''
              }`}
              onClick={onClickHandler}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
