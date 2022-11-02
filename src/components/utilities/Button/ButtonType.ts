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

interface MenuBtn {
  type: 'menu';
}

export default interface BtnType {
  onClickFn(): void;
  children?: string;
  btnInfo: PrimaryBtn | SecondaryBtn | MenuBtn;
}
