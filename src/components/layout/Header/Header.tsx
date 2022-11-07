import React, { useState, useEffect } from 'react';
import { backgroundColors } from '../../../types/colors';
import Nav from '../../utilities/Nav/Nav';

interface HeaderType {
  backgroundColor: backgroundColors;
}

const Header: React.FC<HeaderType> = ({ backgroundColor }) => {
  const [useSolidColor, setUseSolidColor] = useState({
    matches: window.innerWidth >= 800 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia('(min-width: 50em');
    mediaQuery.addListener(setUseSolidColor);

    return () => {
      mediaQuery.removeListener(setUseSolidColor);
    };
  }, []);

  return (
    <header className={`header ${backgroundColor}`} data-testid='header'>
      <span className='header__logo'>{`<JoshuaRodriguez />`}</span>
      <Nav
        type='header'
        backgroundColor={`${
          useSolidColor.matches
            ? backgroundColor
            : 'bg-color__light--accent-medium-opaque'
        }`}
      />
    </header>
  );
};

export default Header;
