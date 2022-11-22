import React, { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';
import useStandardMQueries from '../../../hooks/useStandardMQueries';
import Icon from '../../utilities/Icon/Icon';
import Heading from '../../utilities/Heading/Heading';
import HeadingType from '../../utilities/Heading/HeadingType';
import Text from '../../utilities/Text/Text';
import TextType from '../../utilities/Text/TextType';

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const { biggerThanTablet } = useStandardMQueries();

  const HEADING_PROPS: HeadingType = {
    Tag: 'h2',
    headingSize: biggerThanTablet ? 'heading-size__2' : 'heading-size__3--bold',
    headingColor: `color__${isDarkMode ? 'dark' : 'light'}--accent${
      isDarkMode ? '-medium' : ''
    }`,
    decor: 'line-right',
    wrapperClassName: 'about__title',
    headingClassName: 'about__title-text',
  };

  const TEXT_PROPS: TextType = {
    fontSize: biggerThanTablet ? 'text-size--large' : 'text-size--regular',
    color: isDarkMode ? 'color--black-90' : 'color--black-5',
    textClass: 'about__text',
  };

  return (
    <section className={`about bg-color--black-${isDarkMode ? '25' : '75'}`}>
      <Icon
        type='memoji'
        svg='./assets/memoji/memoji-lightbulb.svg'
        alt='Josh has a great idea with a lightbulb above his head!'
        wrappingClassName='about__icon'
      />
      <Heading {...HEADING_PROPS}>{`<About />`}</Heading>
      <div className='about__text-container'>
        <Text {...TEXT_PROPS}>
          During my college years, I was hard at work perfecting the craft of
          clarinet music making — I practiced, performed and placed in
          competitions, and taught, as well.
        </Text>
        <Text {...TEXT_PROPS}>
          In 2020, I decided to expand my horizons and taught myself to code.
          After learning the basics of HTML, CSS, JavaScript, and React, I dove
          head-first into solving business problems, creating a fully featured
          and functional website from scratch for my family's company and
          learning a bunch along the way.
        </Text>
        <Text {...TEXT_PROPS}>
          If you don't find me tackling the next big project, you can find me
          playing or listening to music, playing volleyball, watching sports,
          working out, or petting my cats.
        </Text>
      </div>
    </section>
  );
};

export default About;
