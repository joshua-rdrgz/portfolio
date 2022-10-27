import React from 'react';
import TextType from './TextType';

const Text: React.FC<TextType> = ({ children, fontSize, color, textAlign }) => {
  return (
    <p
      className={`text ${fontSize} ${color}${textAlign ? ` ${textAlign}` : ''}`}
    >
      {children}
    </p>
  );
};

export default Text;
