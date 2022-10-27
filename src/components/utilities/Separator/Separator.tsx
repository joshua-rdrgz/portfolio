import React from 'react';
import { backgroundColors } from '../../../types/colors';

interface SeparatorType {
  backgroundColor: backgroundColors;
}

const Separator: React.FC<SeparatorType> = ({ backgroundColor }) => {
  return (
    <hr className={`separator ${backgroundColor}`} data-testid='separator' />
  );
};

export default Separator;
