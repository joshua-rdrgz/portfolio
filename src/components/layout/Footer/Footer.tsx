import React, { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';
import { backgroundColors } from '../../../types/colors';
import Nav from '../../utilities/Nav/Nav';

interface FooterProps {
  backgroundColor: backgroundColors;
}

const Footer: React.FC<FooterProps> = ({ backgroundColor }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <footer className={`footer ${backgroundColor}`}>
      <span className='footer__logo'>{'<JoshuaRodriguez />'}</span>
      <Nav type='footer' backgroundColor={backgroundColor} />
      <p className='footer__copyright'>{`Designed and built with ${
        isDarkMode ? '💙' : '💚'
      } by Joshua Rodriguez. © 2022 All rights reserved`}</p>
    </footer>
  );
};

export default Footer;
