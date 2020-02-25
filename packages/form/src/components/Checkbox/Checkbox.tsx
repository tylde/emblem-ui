import React, {useCallback} from 'react';
import {Label, LabelText, CheckboxBase, ElementColor, IconType} from '@emblem-ui/core';

import {HandleChange} from '../form.interface';

interface Checkbox {
  checked?: boolean,
  checkedIcon?: IconType,
  checkedText?: string,
  componentId: string,
  disabled?: boolean,
  elementColor?: ElementColor,
  onChange: HandleChange,
}

const Checkbox: React.FC<Checkbox> = ({
  checked,
  checkedIcon,
  checkedText,
  componentId,
  disabled,
  elementColor,
  onChange
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
      inline
    >
      <CheckboxBase
        aria-labelledby={`switch-label-${componentId}`}
        checked={checked}
        checkedIcon={checkedIcon}
        disabled={disabled}
        elementColor={elementColor}
        id={`switch-${componentId}`}
        onChange={handleChange}
      />
      {checkedText && <LabelText disabled={disabled}>{checkedText}</LabelText>}
    </Label>
  );
};

export default Checkbox;
