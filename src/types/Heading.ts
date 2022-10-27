import colors from '../types/colors';
import headingSize from '../types/heading-size';
import textSize from '../types/text-size';

interface SubHeadingBoth {
  type: 'both';
  textUpper: {
    content: string;
    textSize: textSize;
    textColor: colors;
  };
  textLower: {
    content: string | React.ReactNode;
    textSize: textSize;
    textColor: colors;
  };
}

interface SubHeading {
  type: 'upper' | 'lower';
  content: string;
  textSize: textSize;
  textColor: colors;
}

export default interface HeadingProps {
  Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: string;
  headingSize: headingSize;
  headingColor: colors;
  decor?:
    | 'line-left'
    | 'line-center'
    | 'line-right'
    | 'lines';
  subHeading?: SubHeading | SubHeadingBoth;
}
