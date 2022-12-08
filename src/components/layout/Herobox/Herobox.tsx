import React, { useContext } from 'react';
import useStandardMQueries from '../../../hooks/useStandardMQueries';
import ThemeContext from '../../../store/theme-context';
import Heading from '../../utilities/Heading/Heading';
import Icon from '../../utilities/Icon/Icon';
import IconType from '../../utilities/Icon/IconType';
import Button from '../../utilities/Button/Button';
import BtnType from '../../utilities/Button/ButtonType';
import Wrapper from '../../Wrapper';
import HeadingType from '../../utilities/Heading/HeadingType';

const Herobox: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const { biggerThanSmallPhone, biggerThanBigPhone, biggerThanBigDesktop } =
    useStandardMQueries();

  const HEADING_PROPS: HeadingType = {
    Tag: 'h1',
    headingSize: biggerThanSmallPhone
      ? biggerThanBigPhone
        ? biggerThanBigDesktop
          ? 'heading-size__1'
          : 'heading-size__2'
        : 'heading-size__3--bold'
      : 'heading-size__4',
    headingColor: isDarkMode
      ? 'color__dark--accent'
      : 'color__light--accent-medium',
    subHeading: {
      type: 'both',
      textUpper: {
        content: `Hi 👋🏽 I'm`,
        headingSize: biggerThanBigPhone
          ? biggerThanBigDesktop
            ? 'heading-size__4'
            : 'heading-size__5'
          : 'heading-size__6',
        textColor: isDarkMode ? 'color--black-5' : 'color--black-75',
      },
      textLower: {
        content: (
          <Wrapper>
            A passionate{' '}
            <strong
              className={`color__${isDarkMode ? 'dark' : 'light'}--accent`}
            >
              Front End Developer
            </strong>
            , a lifelong{' '}
            <strong
              className={`color__${isDarkMode ? 'dark' : 'light'}--accent`}
            >
              learner
            </strong>
            , and a motivated{' '}
            <strong
              className={`color__${isDarkMode ? 'dark' : 'light'}--accent`}
            >
              self-starter
            </strong>
            .
          </Wrapper>
        ),
        textSize: biggerThanBigPhone
          ? 'text-size--xxlarge'
          : 'text-size--large',
        textColor: isDarkMode ? 'color--black-15' : 'color--black-75',
      },
    },
    headingClassName: 'herobox__header',
    wrapperClassName: 'herobox__title',
  };

  const BUTTON_PROPS: BtnType = {
    Tag: 'a',
    href: '#projects',
    btnInfo: {
      type: 'primary',
      textColor: isDarkMode ? 'color--black-75' : 'color--black-5',
      btnColor: `bg-color__${isDarkMode ? 'dark' : 'light'}--accent`,
      hoverBgColor: `hover-bg-color__${isDarkMode ? 'dark' : 'light'}--accent`,
      main: true,
    },
  };

  const ICON_PROPS: IconType = {
    type: 'memoji',
    svg: `./assets/memoji/${isDarkMode ? 'dark' : 'light'}/memoji.svg`,
    wrappingClassName: 'herobox__memoji',
    alt: 'Josh hard at work coding behind his computer!',
  };

  return (
    <section
      className={`herobox bg-color__${
        isDarkMode ? 'dark' : 'light'
      }--gradient-hero`}
    >
      <div className='herobox__content'>
        <Heading {...HEADING_PROPS}>Joshua Rodriguez.</Heading>
        <Button {...BUTTON_PROPS}>See My Work</Button>
      </div>
      <Icon {...ICON_PROPS} />
    </section>
  );
};

export default Herobox;
