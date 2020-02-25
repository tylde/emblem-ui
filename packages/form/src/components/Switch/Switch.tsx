import React from 'react';
import {Label, LabelText, SwitchBase, ElementColor, IconType} from '@emblem-ui/core';

import {HandleChange} from '../form.interface';

interface Switch {
  checked?: boolean,
  checkedIcon?: IconType,
  checkedText?: string,
  componentId: string,
  disabled?: boolean,
  elementColor?: ElementColor,
  icon?: IconType,
  onChange: HandleChange,
  text?: string
}

const Switch: React.FC<Switch> = ({
  checked,
  checkedIcon,
  checkedText,
  componentId,
  disabled,
  elementColor,
  icon,
  onChange,
  text
}) => (
  <Label
    disabled={disabled}
    htmlFor={`switch-${componentId}`}
    id={`switch-label-${componentId}`}
    inline
  >
    {text && <LabelText disabled={disabled}>{text}</LabelText>}
    <SwitchBase
      aria-labelledby={`switch-label-${componentId}`}
      checked={checked}
      checkedIcon={checkedIcon}
      disabled={disabled}
      elementColor={elementColor}
      icon={icon}
      id={`switch-${componentId}`}
      onChange={onChange}
    />
    {checkedText && <LabelText disabled={disabled}>{checkedText}</LabelText>}
  </Label>
);

export default Switch;
