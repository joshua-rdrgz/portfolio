import React, { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';
import HeadingType from './HeadingType';

const Heading: React.FC<HeadingType> = ({
  Tag,
  headingSize,
  subHeading,
  decor,
  headingClassName,
  wrapperClassName,
  headingColor,
  children,
}) => {
  const { isDarkMode } = useContext(ThemeContext);

  const hasBothSubHeadings = subHeading?.type === 'both';
  const hasUpperSubHeading = subHeading?.type === 'upper';
  const hasLowerSubHeading = subHeading?.type === 'lower';
  const hasLeftDecorLine =
    decor?.includes('line-left') || decor?.includes('line-center');
  const hasRightDecorLine =
    decor?.includes('line-right') || decor?.includes('line-center');
  const hasDecorDoubleLines = decor?.includes('lines');

  return (
    <header
      className={`heading${wrapperClassName ? ' ' + wrapperClassName : ''}`}
    >
      {hasBothSubHeadings && (
        <span
          className={`${subHeading.textUpper.headingSize} ${subHeading.textUpper.textColor} ${subHeading.textUpper?.className}`}
        >
          {subHeading.textUpper.content}
        </span>
      )}
      {hasUpperSubHeading && (
        <span
          className={`${subHeading.textSize} ${subHeading.textColor} ${subHeading?.className}`}
        >
          {subHeading.content}
        </span>
      )}
      <div className='heading__decor'>
        {hasLeftDecorLine && (
          <div
            className={`heading__decor--line-left bg-color__${
              isDarkMode ? 'dark' : 'light'
            }--accent-medium`}
            data-testid='heading__left-decor'
          />
        )}
        <Tag
          className={
            `heading__text${
              decor ? ' decor' : ''
            } ${headingSize} ${headingColor}` +
            `${hasDecorDoubleLines ? ' heading__decor--lines' : ''}` +
            `${decor ? ' decor__text' : ''}` +
            (headingClassName ? ' ' + headingClassName : '')
          }
        >
          {children}
        </Tag>
        {hasRightDecorLine && (
          <div
            className={`heading__decor--line-right bg-color__${
              isDarkMode ? 'dark' : 'light'
            }--accent-medium`}
            data-testid='heading__right-decor'
          />
        )}
      </div>
      {hasBothSubHeadings && (
        <span
          className={`${subHeading.textLower.textSize} ${subHeading.textLower.textColor} ${subHeading.textLower?.className}`}
        >
          {subHeading.textLower.content}
        </span>
      )}
      {hasLowerSubHeading && (
        <span
          className={`${subHeading.textSize} ${subHeading.textColor} ${subHeading?.className}`}
        >
          {subHeading.content}
        </span>
      )}
    </header>
  );
};

export default Heading;
