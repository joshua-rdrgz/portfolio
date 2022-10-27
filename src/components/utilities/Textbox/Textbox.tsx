import React from 'react';
import TextboxType from './TextboxType';

const Textbox: React.FC<TextboxType> = ({
  children,
  backgroundColor,
  borderColor,
}) => {
  return (
    <figure
      className={`textbox ${backgroundColor} ${borderColor}`}
      data-testid='textbox-figure'
    >
      {children}
    </figure>
  );
};

export default Textbox;
