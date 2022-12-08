import { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';
import useStandardMQueries from '../../../hooks/useStandardMQueries';
import Heading from '../../utilities/Heading/Heading';
import HeadingType from '../../utilities/Heading/HeadingType';
import Project from '../../utilities/Project/Project';
import PROJECTS_INFO from './PROJECTS_INFO';

const Projects = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { biggerThanBigDesktop } = useStandardMQueries();

  const HEADING_PROPS: HeadingType = {
    Tag: 'h2',
    headingSize: biggerThanBigDesktop ? 'heading-size__2' : 'heading-size__3--bold',
    headingColor: `color__${isDarkMode ? 'dark' : 'light'}--accent`,
    headingClassName: 'projects__heading',
    decor: 'lines',
  };

  return (
    <section
      className={`projects__container bg-color__${
        isDarkMode ? 'dark' : 'light'
      }--gradient-project`}
    >
      <Heading {...HEADING_PROPS}>{`<Projects />`}</Heading>
      <section className='projects'>
        {PROJECTS_INFO.map((PROJECT_PROPS, idx) => (
          <Project {...PROJECT_PROPS} idx={idx} key={idx} />
        ))}
      </section>
    </section>
  );
};

export default Projects;
