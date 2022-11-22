import React from 'react';
import TextType from './TextType';

const Text: React.FC<TextType> = ({ children, fontSize, color, textClass }) => {
  return (
    <p
      className={`text ${fontSize} ${color}${textClass ? ` ${textClass}` : ''}`}
    >
      {children}
    </p>
  );
};

export default Text;
