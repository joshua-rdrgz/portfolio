import { useContext, useState } from 'react';
import ThemeContext from '../../../store/theme-context';
import useStandardMQueries from '../../../hooks/useStandardMQueries';
import ProjectModal from '../../layout/ProjectModal/ProjectModal';
import Heading from '../Heading/Heading';
import HeadingType from '../Heading/HeadingType';
import Text from '../Text/Text';
import TextType from '../Text/TextType';
import TechStack from '../TechStack/TechStack';
import Button from '../Button/Button';
import ButtonType from '../Button/ButtonType';
import ProjectType from './ProjectType';

const Project: React.FC<ProjectType> = ({
  heading,
  summary,
  techStack,
  links,
  bgImg: { src, alt },
  idx,
  modal,
}) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { biggerThanBigPhone } = useStandardMQueries();
  const { title, subtitle } = heading;

  const HEADING_PROPS: HeadingType = {
    Tag: 'h3',
    headingSize: biggerThanBigPhone ? 'heading-size__4' : 'heading-size__5',
    headingColor: `color__${isDarkMode ? 'dark' : 'light'}--accent`,
    headingClassName: 'project__title',
    wrapperClassName: 'project__heading-wrapper',
    subHeading: {
      type: 'upper',
      content: subtitle,
      textSize: biggerThanBigPhone ? 'text-size--large' : 'text-size--medium',
      textColor: isDarkMode ? 'color--black-15' : 'color--black-75',
      className: 'project__subtitle',
    },
  };

  const TEXT_PROPS: TextType = {
    fontSize: biggerThanBigPhone ? 'text-size--large' : 'text-size--regular',
    color: isDarkMode ? 'color--black-5' : 'color--black-75',
    textClass: 'project__text',
  };

  const BUTTON_PRIMARY_PROPS: ButtonType = {
    Tag: 'button',
    onClickFn: () => {
      setModalIsOpen(true);
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
      }
    },
    customClasses: 'project__btn project__btn--primary',
    btnInfo: {
      type: 'primary',
      textColor: isDarkMode ? 'color--black-75' : 'color--white',
      btnColor: `bg-color__${isDarkMode ? 'dark' : 'light'}--accent`,
      hoverBgColor: `hover-bg-color__${
        isDarkMode ? 'dark' : 'light'
      }--accent-medium`,
    },
  };

  const BUTTON_SECONDARY_PROPS: ButtonType = {
    Tag: 'a',
    customClasses: 'project__btn project__btn--secondary',
    btnInfo: {
      type: 'secondary',
      textColor: isDarkMode ? 'color--black-15' : 'color--black-50',
      btnColor: `border-color__${isDarkMode ? 'dark' : 'light'}--accent`,
      hoverBgColor: `hover-bg-color__${
        isDarkMode ? 'dark' : 'light'
      }--accent-medium`,
    },
  };

  return (
    <section className='project__container'>
      <figure
        className={`project__bg-img-figure project__bg-img-figure--${
          idx % 2 === 0 ? 'even' : 'odd'
        }`}
      >
        <img src={src} alt={alt} className='project__bg-img' />
      </figure>
      <article
        className={`project project--${
          idx % 2 === 0 ? 'even' : 'odd'
        } bg-color--${isDarkMode ? 'black-75' : 'white'}-opaque`}
      >
        <Heading {...HEADING_PROPS}>{title}</Heading>
        <Text {...TEXT_PROPS}>{summary}</Text>
        <TechStack
          classNames={{
            container: 'project__skill-container',
            item: 'project__skill',
          }}
          techStack={techStack}
        />
        <div className='project__btn-container'>
          <Button {...BUTTON_PRIMARY_PROPS}>More Info</Button>
          <Button {...BUTTON_SECONDARY_PROPS} href={links.liveSite}>
            View Live
          </Button>
          <Button {...BUTTON_SECONDARY_PROPS} href={links.gitHub}>
            GitHub
          </Button>
        </div>
      </article>
      <ProjectModal
        content={modal}
        heading={heading}
        links={links}
        isOpen={modalIsOpen}
        closeModal={() => {
          setModalIsOpen(false);
          document.body.style.overflow = 'unset';
        }}
      />
    </section>
  );
};

export default Project;
