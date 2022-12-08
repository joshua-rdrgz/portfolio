import {
  backgroundColors,
  borderColors,
  colors,
  hoverBgColors,
} from '../../../types/colors';

interface PrimaryBtn {
  type: 'primary';
  textColor: colors;
  btnColor: backgroundColors;
  hoverBgColor: hoverBgColors;
  main?: boolean;
}

interface SecondaryBtn {
  type: 'secondary';
  textColor: colors;
  btnColor: borderColors;
  hoverBgColor: hoverBgColors;
}

export default interface BtnType {
  children?: string;
  Tag: 'a' | 'button';
  href?: string;
  ref?: React.MutableRefObject<HTMLButtonElement | null>;
  onClickFn?: () => void;
  customClasses?: string;
  btnInfo: PrimaryBtn | SecondaryBtn;
  isDisabled?: boolean;
}
