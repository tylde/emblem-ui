import React from 'react';
import {EmblemUITheme, useTheme} from '@emblem-ui/styles';

import Icon from '../Icon/Icon';
import {ElementColor, IconType} from '../../interface/element.interface';
import {
  CheckboxBullet,
  CheckboxComponent,
  CheckboxElementIconWrapper,
  CheckboxElementInput
} from './CheckboxElement.styles';

interface CheckboxBase extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  checkedIcon?: IconType;
  disabled?: boolean;
  elementColor?: ElementColor;
  icon?: IconType;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxBase: React.FC<CheckboxBase> = ({
  checked = false,
  checkedIcon = 'check',
  disabled = false,
  elementColor = 'primary',
  onChange = () => {},
  ...otherProps
}) => {
  const theme: EmblemUITheme = useTheme();
  const {checkbox: {base}} = theme;
  return (
    <CheckboxComponent theme={theme}>
      <CheckboxElementInput
        checked={checked}
        disabled={disabled}
        elementColor={elementColor}
        onChange={onChange}
        theme={theme}
        type='checkbox'
        {...otherProps}
      />
      <CheckboxBullet elementColor={elementColor} checked={checked} theme={theme}>
        <CheckboxElementIconWrapper checked={checked} theme={theme}>
          <Icon base={base} isDisabled={disabled} type={checkedIcon} />
        </CheckboxElementIconWrapper>
      </CheckboxBullet>
    </CheckboxComponent>
  );
};

export default CheckboxBase;
