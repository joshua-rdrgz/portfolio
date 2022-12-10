import React, { useContext } from 'react';
import ThemeContext from '../../../../store/theme-context';
import useStandardMQueries from '../../../../hooks/useStandardMQueries';
import ProjectType from '../../../utilities/Project/ProjectType';
import Heading from '../../../utilities/Heading/Heading';
import HeadingType from '../../../utilities/Heading/HeadingType';
import Text from '../../../utilities/Text/Text';
import TextType from '../../../utilities/Text/TextType';

interface ApproachProps {
  approach: ProjectType['modal']['approach'];
}

const Approach: React.FC<ApproachProps> = ({
  approach: { img, text: textArray },
}) => {
  const { isDarkMode } = useContext(ThemeContext);
  const { biggerThanVertTablet } = useStandardMQueries();

  const HEADING_PROPS: HeadingType = {
    Tag: 'h3',
    headingSize: biggerThanVertTablet ? 'heading-size__4' : 'heading-size__5',
    headingColor: isDarkMode
      ? 'color__dark--accent-medium'
      : 'color__light--accent',
    headingClassName: 'approach__heading',
    wrapperClassName: 'approach__heading-wrapper',
    decor: 'line-right',
  };

  const TEXT_PROPS: TextType = {
    fontSize: 'text-size--regular',
    color: isDarkMode ? 'color--black-90' : 'color--black-5',
    textClass: 'approach__text',
  };

  return (
    <section className={`approach bg-color--black-${isDarkMode ? '15' : '90'}`}>
      <Heading {...HEADING_PROPS}>Requirements / Approach</Heading>
      <div className="approach__content">
        <figure className='approach__figure'>
          <img className='approach__img' src={img.src} alt={img.alt} />
        </figure>
        <div>
          {textArray.map((text, idx) => (
            <Text {...TEXT_PROPS} key={`approach-text-${idx}`}>
              {text}
            </Text>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
