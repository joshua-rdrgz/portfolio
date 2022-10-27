import React from 'react';
import HeadingProps from '../../types/Heading';

const Heading: React.FC<HeadingProps> = ({
  Tag,
  headingSize,
  subHeading,
  decor,
  headingColor,
  children,
}) => {
  const hasBothSubHeadings = subHeading?.type === 'both';
  const hasUpperSubHeading = subHeading?.type === 'upper';
  const hasLowerSubHeading = subHeading?.type === 'lower';
  const hasLeftDecorLine =
    decor?.includes('line-left') || decor?.includes('line-center');
  const hasRightDecorLine =
    decor?.includes('line-right') || decor?.includes('line-center');
  const hasDecorDoubleLines = decor?.includes('lines');

  return (
    <header className={`heading${decor ? ' decor' : ''}`}>
      {hasBothSubHeadings && (
        <span
          className={`${subHeading.textUpper.textSize} ${subHeading.textUpper.textColor}`}
        >
          {subHeading.textUpper.content}
        </span>
      )}
      {hasUpperSubHeading && (
        <span className={`${subHeading.textSize} ${subHeading.textColor}`}>
          {subHeading.content}
        </span>
      )}
      <div className="heading__decor">
        {hasLeftDecorLine && (
          <div className="heading__decor--line-left bg-color__light--accent-medium" />
        )}
        <Tag
          className={
            `heading__text ${headingSize} ${headingColor}` +
            `${hasDecorDoubleLines ? ' heading__decor--lines' : ''}` +
            `${decor ? ' decor__text' : ''}`
          }
        >
          {children}
        </Tag>
        {hasRightDecorLine && (
          <div className="heading__decor--line-right bg-color__light--accent-medium" />
        )}
      </div>
      {hasBothSubHeadings && (
        <span
          className={`${subHeading.textLower.textSize} ${subHeading.textLower.textColor}`}
        >
          {subHeading.textLower.content}
        </span>
      )}
      {hasLowerSubHeading && (
        <span className={`${subHeading.textSize} ${subHeading.textColor}`}>
          {subHeading.content}
        </span>
      )}
    </header>
  );
};

export default Heading;
