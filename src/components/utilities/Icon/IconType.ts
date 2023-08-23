import { backgroundColors } from '../../../types/colors';
import { IconType } from 'react-icons/lib';

interface IconBase {
  alt?: string;
  testId?: string;
  wrappingClassName?: string;
  imgClassName?: string;
}

interface ReactIcon extends IconBase {
  type: 'react-icon';
  svg: IconType;
  caption?: string;
  backgroundColor?: null;
  onClickFn?: undefined;
}

interface SkillSocialType extends IconBase {
  type: 'social' | 'skill';
  svg: `./assets/${string}.svg`;
  caption?: string;
  backgroundColor?: null;
  onClickFn?: undefined;
}

interface MemojiType extends IconBase {
  type: 'memoji';
  svg: `./assets/${string}.svg`;
  caption?: null;
  backgroundColor?: null;
  onClickFn?: undefined;
}

interface SwitchType extends IconBase {
  type: 'switch';
  svg: `./assets/${string}.svg`;
  caption?: null;
  backgroundColor: backgroundColors;
  onClickFn: () => void;
}

type IIcon = SkillSocialType | MemojiType | SwitchType | ReactIcon;
export default IIcon;
