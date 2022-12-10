import React, { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';
import useStandardMQueries from '../../../hooks/useStandardMQueries';
import ProjectType from '../Project/ProjectType';

interface TechStackProps {
  classNames: {
    container: string;
    item: string;
  };
  techStack: ProjectType['techStack'];
}

const TechStack: React.FC<TechStackProps> = ({ classNames, techStack }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const { biggerThanVertTablet } = useStandardMQueries();
  const { container: containerClass, item: itemClass } = classNames;
  return (
    <ul className={containerClass}>
      {techStack.map((skill) => (
        <li
          className={`${itemClass} color__${
            isDarkMode ? 'dark' : 'light'
          }--accent${isDarkMode ? '' : '-medium'}-opaque text-size--${
            biggerThanVertTablet ? 'medium' : 'regular'
          }`}
          key={skill}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default TechStack;
