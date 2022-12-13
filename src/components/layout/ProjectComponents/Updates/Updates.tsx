import React, { useContext } from 'react';
import ThemeContext from '../../../../store/theme-context';
import useStandardMQueries from '../../../../hooks/useStandardMQueries';
import ProjectType from '../../../utilities/Project/ProjectType';
import Heading from '../../../utilities/Heading/Heading';
import HeadingType from '../../../utilities/Heading/HeadingType';
import Text from '../../../utilities/Text/Text';
import TextType from '../../../utilities/Text/TextType';

interface UpdatesProps {
  updates: ProjectType['modal']['updates'];
  closeModal: () => void;
}

const Updates: React.FC<UpdatesProps> = ({
  updates: { imgs: imgsArray, items: itemsArray },
  closeModal,
}) => {
  const { isDarkMode } = useContext(ThemeContext);
  const { biggerThanVertTablet, biggerThanTablet } = useStandardMQueries();

  const HEADING_PROPS: HeadingType = {
    Tag: 'h3',
    headingSize: biggerThanVertTablet ? 'heading-size__4' : 'heading-size__5',
    headingColor: isDarkMode
      ? 'color__dark--accent-medium'
      : 'color__light--accent',
    wrapperClassName: 'updates__heading-wrapper',
  };

  const TEXT_PROPS: TextType = {
    fontSize: biggerThanTablet ? 'text-size--xxlarge' : 'text-size--large',
    color: isDarkMode ? 'color--black-10' : 'color--black-75',
    textClass: 'updates__text',
  };
  return (
    <section className='updates'>
      <Heading {...HEADING_PROPS}>Future Updates</Heading>
      <div className='updates__text-container'>
        {itemsArray.map((item, itemIdx) => (
          <Text {...TEXT_PROPS} key={`item-${itemIdx}`}>
            {item}
          </Text>
        ))}
      </div>
      <div className='updates__img-container'>
        {imgsArray.map((img, imgIdx) => (
          <figure className='updates__figure' key={`update-img-${imgIdx}`}>
            <img className='updates__img' src={img.src} alt={img.alt} />
          </figure>
        ))}
      </div>
      <button
        className={`updates__close-btn bg-color__${
          isDarkMode ? 'dark' : 'light'
        }--accent-medium`}
        onClick={closeModal}
      >
        CLOSE
      </button>
    </section>
  );
};

export default Updates;
