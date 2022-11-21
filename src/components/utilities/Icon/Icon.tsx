import React from 'react';
import IconType from './IconType';

const Icon: React.FC<IconType> = ({
  type,
  svg,
  alt,
  caption,
  testId,
  backgroundColor,
  wrappingClassName,
  imgClassName,
  onClickFn,
}) => {
  const WrappingTag = type === 'switch' ? 'button' : 'figure';
  return (
    <WrappingTag
      className={`icon__figure icon__figure--${type}${
        backgroundColor ? ` ${backgroundColor}` : ''
      }${wrappingClassName ? ` ${wrappingClassName}` : ''}`}
      data-testid={testId}
    >
      <img
        src={svg}
        alt={alt}
        className={`icon${imgClassName ? ` ${imgClassName}` : ''}`}
        onClick={onClickFn}
      />
      {caption && <p className='icon__caption'>{caption}</p>}
    </WrappingTag>
  );
};

export default Icon;
