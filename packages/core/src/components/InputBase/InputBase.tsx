import React from 'react';
import {EmblemUITheme, useTheme} from '@emblem-ui/styles';

import {ElementSize} from '../../interface/element.interface';
import {StyledInput} from './InputBase.styles';

interface InputBase extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  elementSize?: ElementSize;
  isError?: boolean;
  isInfo?: boolean;
  isSuccess?: boolean;
  isWarning?: boolean;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  type?: 'text' | 'number' | 'search' | 'password';
  value?: string;
}

const InputBase: React.FC<InputBase> = ({
  disabled = false,
  elementSize = 'default',
  isError = false,
  isInfo = false,
  isSuccess = false,
  isWarning = false,
  onChange = () => {},
  type = 'text',
  value = '',
  ...otherAttributes
}) => {
  const theme: EmblemUITheme = useTheme();

  return (
    <StyledInput
      disabled={disabled}
      elementSize={elementSize}
      isError={isError}
      isInfo={isInfo}
      isSuccess={isSuccess}
      isWarning={isWarning}
      onChange={onChange}
      theme={theme}
      type={type}
      value={value}
      {...otherAttributes}
    />
  );
};

export default InputBase;
