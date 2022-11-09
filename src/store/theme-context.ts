import React, { useState, createContext } from 'react';

interface ThemeCtxState {
  isDarkMode: boolean;
  toggleMode: () => void;
}

const defaultState = {
  isDarkMode: false,
  toggleMode: () => {},
};

const ThemeContext = createContext<ThemeCtxState>(defaultState);

export default ThemeContext;
