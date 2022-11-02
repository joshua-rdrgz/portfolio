import React from 'react';

interface IconBase {
  svg: `./assets/${string}.svg`;
  alt: string;
  testId?: string;
}
interface SkillSocialType extends IconBase {
  type: 'social' | 'skill';
  caption?: string;
}

interface MemojiType extends IconBase {
  type: 'memoji';
  caption?: null;
}

type IconType = SkillSocialType | MemojiType;

const Icon: React.FC<IconType> = ({ type, svg, alt, caption, testId }) => {
  if (type !== 'memoji') {
    return (
      <figure className='icon__figure'>
        <div className={`icon__figure--${type}`} data-testid={testId}>
          <img src={svg} alt={alt} className='icon' />
        </div>
        {caption && <p className='icon__caption'>{caption}</p>}
      </figure>
    );
  } else {
    return (
      <figure
        className='icon__figure icon__figure--memoji'
        data-testid={testId}
      >
        <img src={svg} alt={alt} className='icon' />
      </figure>
    );
  }
};

export default Icon;
