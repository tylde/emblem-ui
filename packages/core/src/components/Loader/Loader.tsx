import React from 'react';
import {EmblemUITheme, useTheme} from '@emblem-ui/styles';

import {StyledLoader} from './Loader.styles';
import {ElementColor, ElementSize} from '../../interface/element.interface';

interface Loader {
  alternate?: boolean;
  elementColor?: ElementColor;
  elementSize?: ElementSize;
}

const Loader: React.FC<Loader> = ({
  alternate = false,
  elementColor = 'primary',
  elementSize = 'default'
}) => {
  const theme: EmblemUITheme = useTheme();
  return (
    <StyledLoader alternate={alternate} elementColor={elementColor} elementSize={elementSize} theme={theme} />
  );
};

export default Loader;
