import React, { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';
import useStandardMQueries from '../../../hooks/useStandardMQueries';
import ConditionalWrapper from '../ConditionalWrapper';
import Heading from '../Heading/Heading';
import HeadingType from '../Heading/HeadingType';

interface SkillProps {
  heading: string;
  classExtension: string;
  containerClassExtension?: string;
  children?: React.ReactNode;
}

const Skill: React.FC<SkillProps> = ({
  heading,
  classExtension,
  containerClassExtension,
  children,
}) => {
  const { isDarkMode } = useContext(ThemeContext);

  const { biggerThanBigDesktop } = useStandardMQueries();

  const HEADING_PROPS: HeadingType = {
    Tag: 'h3',
    headingSize: biggerThanBigDesktop
      ? 'heading-size__3--regular'
      : 'heading-size__4',
    headingColor: `color__${isDarkMode ? 'dark' : 'light'}--accent`,
    headingClassName: 'skill__heading',
  };

  return (
    <div
      className={`skill ${`skill--${classExtension}`} bg-color--black-${
        isDarkMode ? '90' : '15'
      }`}
    >
      <ConditionalWrapper
        if={classExtension === 'other'}
        with={(children) => <div className='skill__container'>{children}</div>}
      >
        <>
          <Heading {...HEADING_PROPS}>{heading}</Heading>
          <div
            className={`skill__items skill__items--${containerClassExtension}`}
          >
            {children}
          </div>
        </>
      </ConditionalWrapper>
    </div>
  );
};

export default Skill;
