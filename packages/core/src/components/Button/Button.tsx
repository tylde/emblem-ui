import React from 'react';
import {EmblemUITheme, useTheme} from '@emblem-ui/styles';

import Loader from '../Loader/Loader';
import {StyledButton, StyledChildren} from './Button.styles';
import {ButtonStyle, ElementColor, ElementSize} from '../../interface/element.interface';

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  elementStyle?: ButtonStyle;
  elementColor?: ElementColor;
  elementSize?: ElementSize;
  disabled?: boolean;
  loading?: boolean;
  outline?: boolean;
}

const Button: React.FC<Button> = ({
  children,
  elementStyle = 'default',
  elementColor = 'primary',
  elementSize = 'default',
  disabled = false,
  loading = false,
  ...otherProps
}) => {
  const theme: EmblemUITheme = useTheme();
  return (
    <StyledButton
      disabled={disabled || loading}
      elementColor={elementColor}
      elementSize={elementSize}
      elementStyle={elementStyle}
      loading={loading}
      theme={theme}
      {...otherProps}
    >
      <StyledChildren isLoading={loading}>
        {children}
      </StyledChildren>
      {loading && <Loader elementColor={elementColor} elementSize='small' alternate={elementStyle === 'default'} />}
    </StyledButton>
  );
};

export default Button;
