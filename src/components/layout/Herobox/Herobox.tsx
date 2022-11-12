import React, { useContext } from 'react';
import useMQuery from '../../../hooks/useMQuery';
import ThemeContext from '../../../store/theme-context';
import Heading from '../../utilities/Heading/Heading';
import Icon from '../../utilities/Icon/Icon';
import Button from '../../utilities/Button/Button';
import Wrapper from '../../Wrapper';
import HeadingType from '../../utilities/Heading/HeadingType';

const Herobox: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);
  

  const biggerThanSmallPhone = useMQuery({
    initMatch: window.innerWidth >= 450 ? true : false,
    mediaQueryExp: '(min-width: 28.125em)',
  });

  const biggerThanPhone = useMQuery({
    initMatch: window.innerWidth >= 600 ? true : false,
    mediaQueryExp: '(min-width: 40.625em)', // 650px
  });

  const biggerThanTablet = useMQuery({
    initMatch: window.innerWidth >= 2000 ? true : false,
    mediaQueryExp: '(min-width: 125em)',
  });


  const HEADING_COLOR = isDarkMode
    ? 'color__dark--accent'
    : 'color__light--accent-medium';

  const HEADING_SIZE = biggerThanSmallPhone
    ? biggerThanPhone
      ? biggerThanTablet
        ? 'heading-size__1'
        : 'heading-size__2'
      : 'heading-size__3--bold'
    : 'heading-size__4';

  const SUBHEADING: HeadingType['subHeading'] = {
    type: 'both',
    textUpper: {
      content: `Hi 👋🏽 I'm`,
      headingSize: biggerThanPhone
        ? biggerThanTablet
          ? 'heading-size__4'
          : 'heading-size__5'
        : 'heading-size__6',
      textColor: isDarkMode ? 'color--black-5' : 'color--black-75',
    },
    textLower: {
      content: (
        <Wrapper>
          A passionate{' '}
          <strong className={`color__${isDarkMode ? 'dark' : 'light'}--accent`}>
            Front End Developer
          </strong>
          , a lifelong{' '}
          <strong className={`color__${isDarkMode ? 'dark' : 'light'}--accent`}>
            learner
          </strong>
          , and a motivated{' '}
          <strong className={`color__${isDarkMode ? 'dark' : 'light'}--accent`}>
            self-starter
          </strong>
          .
        </Wrapper>
      ),
      textSize: biggerThanTablet ? 'text-size--xxlarge' : 'text-size--large',
      textColor: isDarkMode ? 'color--black-15' : 'color--black-75',
    },
  };


  return (
    <section
      className={`herobox bg-color__${
        isDarkMode ? 'dark' : 'light'
      }--gradient-hero`}
    >
      <div className='herobox__content'>
        <Heading
          Tag='h1'
          headingSize={HEADING_SIZE}
          headingColor={HEADING_COLOR}
          subHeading={SUBHEADING}
          headingClassName='herobox__header'
        >
          Joshua Rodriguez.
        </Heading>
        <Button
          onClickFn={() => {}}
          btnInfo={{
            type: 'primary',
            textColor: isDarkMode ? 'color--black-75' : 'color--black-5',
            btnColor: `bg-color__${isDarkMode ? 'dark' : 'light'}--accent`,
            hoverBgColor: `hover-bg-color__${
              isDarkMode ? 'dark' : 'light'
            }--accent`,
            main: true,
          }}
        >
          See My Work
        </Button>
      </div>
      <Icon
        type='memoji'
        svg={`./assets/memoji/${isDarkMode ? 'dark' : 'light'}/memoji.svg`}
        wrappingClassName='herobox__memoji'
        imgClassName='herobox__memoji-img'
        alt='Josh hard at work coding behind his computer!'
      />
    </section>
  );
};

export default Herobox;
