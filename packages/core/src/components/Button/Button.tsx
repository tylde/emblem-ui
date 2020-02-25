import React from 'react';
import {EmblemUITheme, useTheme} from '@emblem-ui/styles';

import Loader from '../Loader/Loader';
import {StyledButton, StyledChildren} from './Button.styles';
import {ElementColor, ElementSize} from '../../interface/element.interface';

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: ElementColor;
  elementSize?: ElementSize;
  isDisabled?: boolean;
  isLoading?: boolean;
  outline?: boolean;
}

const Button: React.FC<Button> = ({
  children,
  color = 'primary',
  elementSize = 'default',
  isDisabled = false,
  isLoading = false,
  outline = false,
  ...otherProps
}) => {
  const theme: EmblemUITheme = useTheme();
  return (
    <StyledButton
      color={color}
      disabled={isDisabled || isLoading}
      isDisabled={isDisabled}
      isLoading={isLoading}
      outline={outline}
      elementSize={elementSize}
      theme={theme}
      {...otherProps}
    >
      <StyledChildren isLoading={isLoading}>
        {children}
      </StyledChildren>
      {isLoading && <Loader color={color} elementSize='small' alternate={!outline} />}
    </StyledButton>
  );
};

export default Button;
