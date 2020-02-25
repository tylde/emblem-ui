import React from 'react';
import {EmblemUITheme, useTheme} from '@emblem-ui/styles';

import Icon from '../Icon/Icon';
import {ElementColor, IconType} from '../../interface/element.interface';
import {
  CheckboxElementIconWrapper,
  CheckboxElementInput,
  SwitchBar,
  SwitchBullet,
  SwitchComponent
} from './CheckboxElement.styles';

interface SwitchBase extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  checkedIcon?: IconType;
  disabled?: boolean;
  elementColor?: ElementColor;
  icon?: IconType;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SwitchBase: React.FC<SwitchBase> = ({
  checked = false,
  checkedIcon = 'check',
  disabled = false,
  elementColor = 'primary',
  icon = 'none',
  onChange = () => {},
  ...otherProps
}) => {
  const theme: EmblemUITheme = useTheme();
  const {switch: {base}} = theme;
  return (
    <SwitchComponent theme={theme}>
      <SwitchBar theme={theme} />
      <CheckboxElementInput
        checked={checked}
        disabled={disabled}
        elementColor={elementColor}
        onChange={onChange}
        theme={theme}
        type='checkbox'
        {...otherProps}
      />
      <SwitchBullet elementColor={elementColor} checked={checked} theme={theme}>
        <CheckboxElementIconWrapper checked={!checked} theme={theme}>
          <Icon base={base} isDisabled type={icon} />
        </CheckboxElementIconWrapper>
        <CheckboxElementIconWrapper checked={checked} theme={theme}>
          <Icon base={base} isDisabled={disabled} type={checkedIcon} />
        </CheckboxElementIconWrapper>
      </SwitchBullet>
    </SwitchComponent>
  );
};

export default SwitchBase;
