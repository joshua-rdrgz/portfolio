import React, { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';
import useStandardMQueries from '../../../hooks/useStandardMQueries';
import Heading from '../../utilities/Heading/Heading';
import HeadingType from '../../utilities/Heading/HeadingType';
import Form from '../../utilities/Form/Form';
import Icon from '../../utilities/Icon/Icon';
import IconType from '../../utilities/Icon/IconType';

const Contact = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { biggerThanBigDesktop } = useStandardMQueries();

  const HEADING_PROPS: HeadingType = {
    Tag: 'h2',
    headingSize: biggerThanBigDesktop ? 'heading-size__2' : 'heading-size__3--bold',
    headingColor: `color__${isDarkMode ? 'dark' : 'light'}--accent`,
    headingClassName: 'contact__heading',
  };

  const ICON_PROPS: IconType = {
    type: 'memoji',
    svg: `./assets/memoji/${isDarkMode ? 'dark' : 'light'}/memoji-hi.svg`,
    alt: `Josh waves hello. Let's connect today!`,
    wrappingClassName: 'contact__icon-wrapper',
    imgClassName: 'contact__icon',
  };

  return (
    <section className='contact'>
      <div className="contact__content">
        <Heading {...HEADING_PROPS}>{'<Contact />'}</Heading>
        <Form formClassName='contact__form' />
      </div>
      <Icon {...ICON_PROPS} />
    </section>
  );
};

export default Contact;
