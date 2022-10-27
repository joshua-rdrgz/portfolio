import textSize from '../../../types/text-size';
import { colors } from '../../../types/colors';

export default interface TextType {
  children?: string;
  fontSize: textSize;
  color: colors;
  textAlign?: 'text-align--left' | 'text-align--center' | 'text-align--end';
}
