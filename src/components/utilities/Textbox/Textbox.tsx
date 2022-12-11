import React from 'react';
import TextboxType from './TextboxType';

const Textbox: React.FC<TextboxType> = ({
  children,
  backgroundColor,
  borderColor,
  textBoxClass,
}) => {
  return (
    <figure
      className={`textbox ${backgroundColor} ${borderColor}${
        textBoxClass ? ' ' + textBoxClass : ''
      }`}
      data-testid='textbox-figure'
    >
      {children}
    </figure>
  );
};

export default Textbox;
