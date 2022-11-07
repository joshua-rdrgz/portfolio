import React from 'react';
import BtnType from './ButtonType';

const Button: React.FC<BtnType> = ({ btnInfo, onClickFn, children }) => {
  const { type } = btnInfo;
  const primaryClasses =
    type === 'primary'
      ? `btn--primary ${btnInfo.main ? 'btn--main' : ''} ${btnInfo.textColor} ${
          btnInfo.btnColor
        } ${btnInfo.hoverBgColor ? btnInfo.hoverBgColor : ''}`
      : '';
  const secondaryClasses =
    type === 'secondary'
      ? `btn--secondary ${btnInfo.textColor} ${btnInfo.btnColor} ${
          btnInfo.hoverBgColor ? btnInfo.hoverBgColor : ''
        }`
      : '';

  return (
    <button
      className={`btn ${primaryClasses} ${secondaryClasses}`}
      onClick={onClickFn}
    >
      {children}
    </button>
  );
};

export default Button;
