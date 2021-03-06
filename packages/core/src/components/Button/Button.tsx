import React from 'react';
import {EmblemUITheme, useTheme} from '@emblem-ui/styles';

import Loader from '../Loader/Loader';
import {StyledButton, StyledChildren} from './Button.styles';
import {ButtonStyle, ElementColor, ElementSize} from '../../interface/element.interface';

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  children: React.ReactNode;
  elementStyle?: ButtonStyle;
  elementColor?: ElementColor;
  elementSize?: ElementSize;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<Button> = ({
  block = false,
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
      block={block}
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
