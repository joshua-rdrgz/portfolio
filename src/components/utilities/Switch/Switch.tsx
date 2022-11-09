import React, { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';
import Icon from '../Icon/Icon';

const Switch = () => {
  const { isDarkMode, toggleMode } = useContext(ThemeContext);
  return (
    <>
      {isDarkMode && (
        <Icon
          type='switch'
          svg='./assets/switch/sun.svg'
          alt='Switch to light mode!'
          backgroundColor='bg-color__dark--accent-dark'
          onClickFn={toggleMode}
        />
      )}
      {!isDarkMode && (
        <Icon
          type='switch'
          svg='./assets/switch/moon.svg'
          alt='Switch to dark mode!'
          backgroundColor='bg-color__light--accent-dark'
          onClickFn={toggleMode}
        />
      )}
    </>
  );
};

export default Switch;
