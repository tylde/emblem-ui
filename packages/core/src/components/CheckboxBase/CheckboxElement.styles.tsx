import styled, {css} from 'styled-components';
import {EmblemUITheme} from '@emblem-ui/styles';
import {ElementColor} from '../../interface/element.interface';

interface CheckboxElementTheme {
  readonly theme: EmblemUITheme;
}

interface CheckboxElementChecked {
  readonly checked: boolean;
}

interface CheckboxElementColor {
  readonly elementColor: ElementColor;
}

const checkboxDimensions = css<CheckboxElementTheme>`
  width: ${(props: CheckboxElementTheme) => props.theme.checkbox.base};
  height: ${(props: CheckboxElementTheme) => props.theme.checkbox.base};
`;

const switchDimensions = css<CheckboxElementTheme>`
  width: calc(2 * ${(props: SwitchBar) => props.theme.switch.base});
  height: ${(props: SwitchBar) => props.theme.switch.base};
`;

const elementAbsolute = css`
  position: absolute;
  top: 0;
  left: 0;
`;

const checkboxBulletDimensions = css<CheckboxElementTheme>`
  width: ${(props: CheckboxElementTheme) => props.theme.checkbox.base};
  height: ${(props: CheckboxElementTheme) => props.theme.checkbox.base};
`;

const switchBulletDimensions = css<CheckboxElementTheme>`
  width: ${(props: CheckboxElementTheme) => props.theme.switch.base};
  height: ${(props: CheckboxElementTheme) => props.theme.switch.base};
`;

interface CheckboxComponent extends CheckboxElementTheme {}

export const CheckboxComponent = styled.span<CheckboxComponent>`
  *, &, &::before, &::after {
    box-sizing: border-box;
  }

  ${checkboxDimensions};
  display: inline-flex;
  flex-shrink: 0;
  position: relative;
  user-select: none;
`;

interface SwitchComponent extends CheckboxElementTheme {}

export const SwitchComponent = styled.span<SwitchComponent>`
  *, &, &::before, &::after {
    box-sizing: border-box;
  }

  ${switchDimensions};
  display: inline-flex;
  flex-shrink: 0;
  position: relative;
  user-select: none;
`;

interface SwitchBar extends CheckboxElementTheme {}

export const SwitchBar = styled.span<SwitchBar>`
  position: absolute;
  top: 25%;
  left: 15%;
  width: 70%;
  height: 50%;
  border-radius: ${(props: SwitchBar) => props.theme.border.radius};
  background: ${(props: SwitchBar) => props.theme.border.color};
  pointer-events: none;
`;

interface CheckboxElementInput extends CheckboxElementTheme, CheckboxElementColor {}

export const CheckboxElementInput = styled.input<CheckboxElementInput>`
  ${elementAbsolute};
  width: 100%;
  height: 100%;
  opacity: 0;
  margin: 0;
  cursor: pointer;
  
  &:enabled {
    &:hover {
      outline: 0;
      & + span {
        box-shadow: inset 0 0 0 1px ${(props: CheckboxElementInput) => props.theme.palette[props.elementColor].base};
      }
    }

    &:active, &:focus {
      & + span {
        box-shadow:
          inset 0 0 1px 0 ${(props: CheckboxElementInput) => props.theme.palette[props.elementColor].shadow},
          inset 0 0 0 1px ${(props: CheckboxElementInput) => props.theme.palette[props.elementColor].base},
                0 0 0 2px ${(props: CheckboxElementInput) => props.theme.palette[props.elementColor].shadow};
      }
    }
    
    &:active {
      & + span {
        background: ${(props: CheckboxElementInput) => props.theme.palette[props.elementColor].lightest};
      }
      &:checked {
        & + span {
          background: ${(props: CheckboxElementInput) => props.theme.palette[props.elementColor].medium};
        }
      }
    }
  }
  
  &:disabled {
    cursor: initial;
    & + span {
      background: ${(props: CheckboxElementInput) => props.theme.disabled.background};
      box-shadow: inset 0 0 0 1px ${(props: CheckboxElementInput) => props.theme.disabled.border};
    }
  }
`;


interface CheckboxBullet extends CheckboxElementTheme, CheckboxElementChecked, CheckboxElementColor {}

export const CheckboxBullet = styled.span<CheckboxBullet>`
  ${elementAbsolute};
  ${checkboxBulletDimensions};
  pointer-events: none;

  box-shadow: inset 0 0 0 1px ${(props: CheckboxBullet) => (
    props.checked ? props.theme.palette[props.elementColor].base : props.theme.border.color
  )};
  border-radius: ${(props: CheckboxBullet) => props.theme.border.radius};
  
  background: #fff;
  background: ${(props: CheckboxBullet) => props.checked && props.theme.palette[props.elementColor].base};
  transition: background-color ease-in-out ${(props: CheckboxBullet) => props.theme.transitionTime};
`;

interface SwitchBullet extends CheckboxElementTheme, CheckboxElementChecked, CheckboxElementColor {}

export const SwitchBullet = styled.span<SwitchBullet>`
  ${elementAbsolute};
  ${switchBulletDimensions};
  pointer-events: none;

  box-shadow: inset 0 0 0 1px ${(props: SwitchBullet) => (
    props.checked ? props.theme.palette[props.elementColor].base : props.theme.border.color
  )};
  border-radius: ${(props: SwitchBullet) => props.theme.border.radius};
  
  background: #fff;
  background: ${(props: SwitchBullet) => props.checked && props.theme.palette[props.elementColor].base};
  transform: translateX(calc(
    ${(props: SwitchBullet) => (props.checked ? 1 : 0)} * ${(props: SwitchBullet) => props.theme.switch.base}
  ));
  transition:
    transform ease-in-out ${(props: SwitchBullet) => props.theme.transitionTime},
    background-color ease-in-out ${(props: SwitchBullet) => props.theme.transitionTime};
`;

interface CheckboxElementIconWrapper extends CheckboxElementTheme, CheckboxElementChecked {}

export const CheckboxElementIconWrapper = styled.span<CheckboxElementIconWrapper>`
  ${checkboxDimensions};
  ${elementAbsolute};
  transition: opacity ${(props: CheckboxElementIconWrapper) => props.theme.transitionTime}
    ease-in-out ${(props: CheckboxElementIconWrapper) => props.checked && props.theme.transitionTime};
  opacity: ${(props: CheckboxElementIconWrapper) => (props.checked ? 1 : 0)};
`;
