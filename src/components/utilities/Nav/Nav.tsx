import React, { useRef } from 'react';
import { backgroundColors } from '../../../types/colors';
import Socials from '../Socials/Socials';

interface NavType {
  type: 'header' | 'footer';
  backgroundColor: backgroundColors;
}

const Nav: React.FC<NavType> = ({ type, backgroundColor }) => {
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
        <ul className={`nav__ul ${type}-nav__ul ${backgroundColor}`}>
          <Socials type='hf' backgroundColor={backgroundColor} />
          <li className={`nav__item`}>
            <a
              href='#skills'
              className={`nav__link ${
                type === 'header' ? 'header-nav__link' : ''
              } hover-underline__light--accent`}
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
              } hover-underline__light--accent`}
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
              } hover-underline__light--accent`}
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
