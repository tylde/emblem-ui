import React from 'react';
import {useTheme, EmblemUITheme} from '@emblem-ui/styles';

import {StyledButtonGroup} from './ButtonGroup.styles';

interface ButtonGroup {
  children: React.ReactNode,
  direction?: 'horizontal' | 'vertical'
}

const ButtonGroup: React.FC<ButtonGroup> = ({
  children,
  direction = 'horizontal'
}) => {
  const theme: EmblemUITheme = useTheme();
  return (
    <StyledButtonGroup direction={direction} theme={theme}>
      {children}
    </StyledButtonGroup>
  );
};

export default ButtonGroup;
