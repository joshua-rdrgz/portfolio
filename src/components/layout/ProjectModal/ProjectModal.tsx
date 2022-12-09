import React, { useContext } from 'react';
import ThemeContext from '../../../store/theme-context';
import ProjectType from '../../utilities/Project/ProjectType';
import Modal from '../../utilities/Modal/Modal';
import Header from '../Header/Header';

interface ProjectModalProps {
  isOpen: boolean;
  closeModal: () => void;
  content: ProjectType['modal'];
  heading: ProjectType['heading'];
  links: ProjectType['links'];
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  content: { overview, approach, challenges, updates },
  heading,
  links,
  closeModal,
  isOpen,
}) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      {/* For closing modal by clicking backdrop */}
      <Header
        backgroundColor={
          isDarkMode
            ? 'bg-color__dark--accent-dark'
            : 'bg-color__light--accent-dark'
        }
        isModal={true}
        heading={heading}
        links={links}
      />
      <button onClick={closeModal}>Close</button>
      <p>{overview.text}</p>
    </Modal>
  );
};

export default ProjectModal;
