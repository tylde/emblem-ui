import React, {useCallback} from 'react';
import {Label, LabelText, InputBase} from '@emblem-ui/core';

import {HandleChange} from '../form.interface';

interface TextInput {
  componentId: string,
  disabled?: boolean,
  label?: string,
  onChange: HandleChange;
  value?: string;
}

const TextInput: React.FC<TextInput> = ({
  componentId,
  disabled = false,
  label = '',
  onChange,
  value = ''
}) => {
  const handleChange: HandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => onChange(event, componentId),
    [componentId, onChange]
  );
  return (
    <Label
      disabled={disabled}
      htmlFor={`switch-${componentId}`}
      id={`switch-label-${componentId}`}
    >
      {label && <LabelText disabled={disabled}>{label}</LabelText>}
      <InputBase
        aria-labelledby={`switch-label-${componentId}`}
        disabled={disabled}
        id={`switch-${componentId}`}
        onChange={handleChange}
        value={value}
      />
    </Label>
  );
};

export default TextInput;
