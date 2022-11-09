import { backgroundColors } from '../../../types/colors';

interface IconBase {
  svg: `./assets/${string}.svg`;
  alt: string;
  testId?: string;
}
interface SkillSocialType extends IconBase {
  type: 'social' | 'skill';
  caption?: string;
  backgroundColor?: null;
  onClickFn?: undefined;
}

interface MemojiType extends IconBase {
  type: 'memoji';
  caption?: null;
  backgroundColor?: null;
  onClickFn?: undefined;
}

interface SwitchType extends IconBase {
  type: 'switch';
  caption?: null;
  backgroundColor: backgroundColors;
  onClickFn: () => void;
}

type IconType = SkillSocialType | MemojiType | SwitchType;
export default IconType;
