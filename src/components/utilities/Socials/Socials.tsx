import useMQuery from '../../../hooks/useMQuery';
import { backgroundColors } from '../../../types/colors';
import Icon from '../Icon/Icon';

interface SocialsType {
  type: 'hf' | 'sticky';
  backgroundColor: backgroundColors;
}

const Socials: React.FC<SocialsType> = ({ type, backgroundColor }) => {
  const stickyMatch = {
    initMatch: window.innerWidth >= 950 ? true : false,
    mediaQueryExp: '(min-width: 62.5em)',
  };

  const hfMatch = {
    initMatch: window.innerWidth <= 950 ? true : false,
    mediaQueryExp: '(max-width: 62.5em)',
  };

  const mQuery = useMQuery(type === 'sticky' ? stickyMatch : hfMatch);

  if (mQuery) {
    return (
      <figure
        className={`${type}-socials ${backgroundColor}`}
      >
        <ul className={`${type}-socials__ul`}>
          <li className={`${type}-socials__icon`}>
            <a href='https://github.com/joshua-rdrgz' target='_blank' rel="noreferrer">
              <Icon
                type='social'
                svg='./assets/socials/github.svg'
                alt={`Link to Josh's Github Profile`}
              />
            </a>
          </li>
          <li className={`${type}-socials__icon`}>
            <a href='https://www.linkedin.com/in/joshua-rodriguez-a084961b5/' target='_blank' rel="noreferrer">
              <Icon
                type='social'
                svg='./assets/socials/linkedin.svg'
                alt={`Link to Josh's LinkedIn Profile`}
              />
            </a>
          </li>
          <li className={`${type}-socials__icon`}>
            <a href='./resume'>
              <Icon
                type='social'
                svg='./assets/socials/resume.svg'
                alt={`Link to Josh's resume`}
              />
            </a>
          </li>
        </ul>
      </figure>
    );
  } else {
    return null;
  }
};

export default Socials;
