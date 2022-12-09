import React, { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';
import { backgroundColors } from '../../../types/colors';
import Nav from '../../utilities/Nav/Nav';
import useMQuery from '../../../hooks/useMQuery';
import useStandardMQueries from '../../../hooks/useStandardMQueries';
import ProjectType from '../../utilities/Project/ProjectType';

type HeaderType<T = boolean> = T extends true
  ? {
      backgroundColor: backgroundColors;
      isModal: T;
      heading: ProjectType['heading'];
      links: ProjectType['links'];
    }
  : {
      backgroundColor: backgroundColors;
      isModal: T;
      heading?: null;
      links?: null;
    };

const Header: React.FC<HeaderType> = ({
  backgroundColor,
  isModal,
  heading,
  links,
}) => {
  const { isDarkMode } = useContext(ThemeContext);

  const biggerThanVertTablet = useMQuery({
    initMatch: window.innerWidth >= 800 ? true : false,
    mediaQueryExp: '(min-width: 50em)',
  });

  const biggerThanTablet = useMQuery({
    initMatch: window.innerWidth >= 1200 ? true : false,
    mediaQueryExp: '(min-width: 75em)',
  });

  const { biggerThanSmallPhone } = useStandardMQueries();

  return (
    <header
      className={`header ${backgroundColor}${isModal ? ' header--modal' : ''}`}
      data-testid='header'
    >
      <span className={`header__logo${isModal ? ' header__logo--modal' : ''}`}>
        {isModal ? (
          <>
            <span
              className={`color--black-50 ${
                biggerThanSmallPhone
                  ? biggerThanTablet
                    ? 'heading-size__5'
                    : 'heading-size__6'
                  : 'text-size--medium'
              }`}
            >
              {heading.subtitle}
            </span>
            <span
              className={`${
                biggerThanSmallPhone
                  ? biggerThanTablet
                    ? 'heading-size__4'
                    : 'heading-size__5'
                  : 'heading-size__6'
              }`}
            >
              {heading.title}
            </span>
          </>
        ) : (
          `<JoshuaRodriguez />`
        )}
      </span>
      {!isModal && (
        <Nav
          type='header'
          backgroundColor={`${
            biggerThanVertTablet
              ? backgroundColor
              : isDarkMode
              ? 'bg-color__dark--accent-dark-opaque'
              : 'bg-color__light--accent-medium-opaque'
          }`}
        />
      )}
      {isModal && (
        <nav className='modal-nav'>
          <ul className='modal-nav__container'>
            <li className='modal-nav__item'>
              <a
                target='_blank'
                href={links.liveSite}
                className={`modal-nav__link ${
                  isDarkMode
                    ? 'bg-color__dark--accent-dark'
                    : 'bg-color__light--accent-dark'
                }`}
              >
                LIVE SITE
              </a>
            </li>
            <li className='modal-nav__item'>
              <a
                target='_blank'
                href={links.gitHub}
                className={`modal-nav__link ${
                  isDarkMode
                    ? 'color__dark--accent-dark'
                    : 'color__light--accent-dark'
                }`}
              >
                GITHUB
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
