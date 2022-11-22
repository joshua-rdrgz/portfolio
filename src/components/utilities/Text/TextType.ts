import textSize from '../../../types/text-size';
import { colors } from '../../../types/colors';

export default interface TextType {
  children?: string;
  fontSize: textSize;
  color: colors;
  textClass?: string;
}
