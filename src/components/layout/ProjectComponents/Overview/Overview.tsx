import React, { useContext } from 'react';
import ThemeContext from '../../../../store/theme-context';
import useStandardMQueries from '../../../../hooks/useStandardMQueries';
import ProjectType from '../../../utilities/Project/ProjectType';
import Heading from '../../../utilities/Heading/Heading';
import HeadingType from '../../../utilities/Heading/HeadingType';
import Text from '../../../utilities/Text/Text';
import TextType from '../../../utilities/Text/TextType';
import TechStack from '../../../utilities/TechStack/TechStack';

interface OverviewProps {
  overview: ProjectType['modal']['overview'];
}

const Overview: React.FC<OverviewProps> = ({
  overview: { img, text, skills },
}) => {
  const { isDarkMode } = useContext(ThemeContext);
  const { biggerThanBigPhone, biggerThanVertTablet } = useStandardMQueries();

  const HEADING_PROPS: HeadingType = {
    Tag: 'h2',
    headingSize: biggerThanBigPhone
      ? 'heading-size__3--regular'
      : 'heading-size__4',
    headingColor: isDarkMode
      ? 'color__dark--accent'
      : 'color__light--accent-dark',
    headingClassName: 'overview__heading',
    wrapperClassName: 'overview__heading-wrapper',
    decor: 'line-left',
  };

  const TEXT_PROPS: TextType = {
    fontSize: 'text-size--regular',
    color: isDarkMode ? 'color--black-10' : 'color--black',
  };

  return (
    <section
      className={`overview bg-color__${
        isDarkMode ? 'dark' : 'light'
      }--gradient-hero`}
    >
      {!biggerThanVertTablet && <Heading {...HEADING_PROPS}>Overview</Heading>}
      <figure className='overview__figure'>
        <img className='overview__img' src={img.src} alt={img.alt} />
      </figure>
      <section className='overview__content'>
        {biggerThanVertTablet && <Heading {...HEADING_PROPS}>Overview</Heading>}
        <Text {...TEXT_PROPS}>{text}</Text>
        <TechStack
          classNames={{
            container: 'overview__skills',
            item: 'overview__skill',
          }}
          techStack={skills}
        />
      </section>
    </section>
  );
};

export default Overview;
