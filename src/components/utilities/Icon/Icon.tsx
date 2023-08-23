import React from 'react';
import IIcon from './IconType';

const Icon: React.FC<IIcon> = ({
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

  if (type !== 'react-icon') {
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
  } else {
    const ReactIcon = svg;
    return (
      <WrappingTag
        className={`icon__figure icon__figure--${type}${
          backgroundColor ? ` ${backgroundColor}` : ''
        }${wrappingClassName ? ` ${wrappingClassName}` : ''}`}
        data-testid={testId}
      >
        <ReactIcon
          className={`icon${imgClassName ? ` ${imgClassName}` : ''}`}
          size={50}
          color='#818585'
        />
        {caption && <p className='icon__caption'>{caption}</p>}
      </WrappingTag>
    );
  }
};

export default Icon;
