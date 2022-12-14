import React, { forwardRef } from 'react';
import BtnType from './ButtonType';

type RefType = HTMLAnchorElement | HTMLButtonElement;

const Button = forwardRef<RefType, BtnType>(
  ({ btnInfo, Tag, href, target, rel, customClasses, children, isDisabled, onClickFn }, ref) => {
    const { type } = btnInfo;
    const primaryClasses =
      type === 'primary'
        ? ` btn--primary ${btnInfo.main ? 'btn--main' : ''} ${
            btnInfo.textColor
          } ${btnInfo.btnColor} ${
            btnInfo.hoverBgColor ? btnInfo.hoverBgColor : ''
          }`
        : '';
    const secondaryClasses =
      type === 'secondary'
        ? ` btn--secondary ${btnInfo.textColor} ${btnInfo.btnColor} ${
            btnInfo.hoverBgColor ? btnInfo.hoverBgColor : ''
          }`
        : '';

    return (
      <Tag
        href={href}
        target={target}
        rel={rel}
        className={`btn${primaryClasses}${secondaryClasses}${
          customClasses ? ' ' + customClasses : ''
        }`}
        ref={ref as any}
        disabled={isDisabled ? true : false}
        onClick={onClickFn}
      >
        {children}
      </Tag>
    );
  }
);

export default Button;
