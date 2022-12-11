import React, { useContext } from 'react';
import ThemeContext from '../../../../store/theme-context';
import useStandardMQueries from '../../../../hooks/useStandardMQueries';
import ProjectType from '../../../utilities/Project/ProjectType';
import Heading from '../../../utilities/Heading/Heading';
import HeadingType from '../../../utilities/Heading/HeadingType';
import Separator from '../../../utilities/Separator/Separator';
import Text from '../../../utilities/Text/Text';
import TextType from '../../../utilities/Text/TextType';
import Textbox from '../../../utilities/Textbox/Textbox';
import TextboxType from '../../../utilities/Textbox/TextboxType';

interface ChallengesProps {
  challenges: ProjectType['modal']['challenges'];
}

const Challenges: React.FC<ChallengesProps> = ({
  challenges: challengesArray,
}) => {
  const { isDarkMode } = useContext(ThemeContext);
  const { biggerThanVertTablet } = useStandardMQueries();

  const HEADING_PROPS: HeadingType = {
    Tag: 'h3',
    headingSize: biggerThanVertTablet ? 'heading-size__4' : 'heading-size__5',
    headingColor: isDarkMode
      ? 'color__dark--accent-medium'
      : 'color__light--accent',
    headingClassName: 'challenges__heading',
    wrapperClassName: 'challenges__heading-wrapper',
    decor: 'line-center',
  };

  return (
    <section
      className={`challenges bg-color__${
        isDarkMode ? 'dark' : 'light'
      }--gradient-project`}
    >
      <Heading {...HEADING_PROPS}>Challenges</Heading>
      <div className='challenges__content'>
        {challengesArray.map((challenge, challengeIdx) => {
          const { img, summary, details: detailsArray } = challenge;

          const TEXT_PROPS: TextType = {
            fontSize: 'text-size--regular',
            color: isDarkMode
              ? challengeIdx === 0
                ? 'color--black-75'
                : 'color--black-5'
              : challengeIdx === 0
              ? 'color--black-5'
              : 'color--black-75',
          };

          const TEXTBOX_PROPS: TextboxType = {
            backgroundColor: isDarkMode
              ? challengeIdx === 0
                ? 'bg-color--black-5'
                : 'bg-color--black-75'
              : challengeIdx === 0
              ? 'bg-color--black-75'
              : 'bg-color--black-5',
            borderColor: isDarkMode
              ? 'border-color__dark--accent-medium'
              : 'border-color__light--accent-dark',
          };

          return (
            <React.Fragment key={`challenge-${challengeIdx}`}>
              {challengeIdx !== 0 && ( // excludes Separator before 1st challenge section
                <Separator
                  backgroundColor={
                    isDarkMode
                      ? 'bg-color__dark--accent-medium'
                      : 'bg-color__light--accent'
                  }
                />
              )}
              <section className='challenge'>
                <h4
                  className={`challenge__summary text-size--medium ${
                    isDarkMode
                      ? challengeIdx === 0
                        ? 'color--black-15'
                        : 'color--white'
                      : challengeIdx === 0
                      ? 'color--black-75'
                      : 'color--white'
                  }`}
                >
                  {summary}
                </h4>
                <figure className='challenge__figure'>
                  <img className='challenge__img' src={img.src} alt={img.alt} />
                </figure>
                <div className='challenge__text-container'>
                  {detailsArray.map((detail, detailIdx) => (
                    <Textbox
                      {...TEXTBOX_PROPS}
                      key={`detail-${detailIdx}`}
                      textBoxClass={`challenge__textbox challenge__textbox${
                        challengeIdx === 0
                          ? detailIdx % 2 === 0
                            ? '--left'
                            : '--right'
                          : detailIdx % 2 === 0
                          ? '--right'
                          : '--left'
                      }`}
                    >
                      <Text {...TEXT_PROPS}>{detail}</Text>
                    </Textbox>
                  ))}
                </div>
              </section>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Challenges;
