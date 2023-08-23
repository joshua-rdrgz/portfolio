import React, { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';
import useStandardMQueries from '../../../hooks/useStandardMQueries';
import Heading from '../../utilities/Heading/Heading';
import HeadingType from '../../utilities/Heading/HeadingType';
import Skill from '../../utilities/Skill/Skill';
import Icon from '../../utilities/Icon/Icon';
import {
  FULL_STACK_SKILLS,
  TOOLS_AND_DESIGN_SKILLS,
  OTHER_SKILLS,
} from './skill-items';

const Skills = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const { biggerThanBigPhone, biggerThanBigDesktop } = useStandardMQueries();

  const BG_COLOR = isDarkMode ? 'bg-color--black-15' : 'bg-color--black-90';

  const HEADING_SIZE = biggerThanBigDesktop
    ? 'heading-size__2'
    : 'heading-size__3--bold';

  const HEADING_PROPS: HeadingType = {
    Tag: 'h2',
    headingSize: HEADING_SIZE,
    headingColor: `color__${isDarkMode ? 'dark' : 'light'}--accent${
      isDarkMode ? '-medium' : ''
    }`,
    decor: 'line-left',
    headingClassName: 'skills__title--text',
    wrapperClassName: 'skills__title',
    subHeading: {
      type: 'lower',
      content: `Building new things and learning along the way is a big part of why I do what I do.  Here's the skills I've gathered in my journey so far:`,
      className: 'skills__subtitle',
      textSize: biggerThanBigPhone
        ? biggerThanBigDesktop
          ? 'text-size--xxlarge'
          : 'text-size--large'
        : 'text-size--regular',
      textColor: `color--black-${isDarkMode ? '90' : '5'}`,
    },
  };

  return (
    <section className={`skills ${BG_COLOR}`} id='skills'>
      <Heading {...HEADING_PROPS}>{`<Skills />`}</Heading>
      <Skill heading='Full Stack' classExtension='front-end'>
        {FULL_STACK_SKILLS.map((fullStackSkill) => (
          <Icon
            key={fullStackSkill.name}
            type='react-icon'
            svg={fullStackSkill.icon}
            wrappingClassName='skill__item'
            caption={fullStackSkill.name}
          />
        ))}
      </Skill>
      <Skill heading='Tools and Design' classExtension='tools'>
        {TOOLS_AND_DESIGN_SKILLS.map((toolDesignSkill) => (
          <Icon
            key={toolDesignSkill.name}
            type='react-icon'
            svg={toolDesignSkill.icon}
            wrappingClassName='skill__item'
            caption={toolDesignSkill.name}
          />
        ))}
      </Skill>
      <Skill
        heading='Other'
        classExtension='other'
        containerClassExtension='other'
      >
        {OTHER_SKILLS.map((skill) => {
          return (
            <p className='icon__caption' key={skill}>
              {skill}
            </p>
          );
        })}
      </Skill>
    </section>
  );
};

export default Skills;
