/* eslint-disable max-len */
import styled from 'styled-components';
import {EmblemUITheme} from '@emblem-ui/styles';
import {ButtonStyle, ElementColor, ElementSize} from '../../interface/element.interface';

const isAlternateButton = (elementStyle: ButtonStyle): boolean => elementStyle !== 'default';
const isBorderedButton = (elementStyle: ButtonStyle): boolean => (['outline', 'dashed'].indexOf(elementStyle) > -1);
const isSubtleButton = (elementStyle: ButtonStyle): boolean => elementStyle === 'subtle';

interface StyledChildren {
  readonly isLoading?: boolean
}

export const StyledChildren = styled.span<StyledChildren>`
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  
  opacity: ${(props: StyledChildren) => (props.isLoading ? 0 : 1)};
  white-space: nowrap;
  user-select: none;
  pointer-events: none;
`;

interface StyledButton {
  readonly block: boolean;
  readonly disabled: boolean;
  readonly elementColor: ElementColor;
  readonly elementSize: ElementSize;
  readonly elementStyle: ButtonStyle;
  readonly loading: boolean
  readonly theme: EmblemUITheme
}

export const StyledButton = styled.button<StyledButton>`
  *, &, &::before, &::after {
    box-sizing: border-box;
  }

  &::before, &::after {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    border-radius: ${(props: StyledButton) => props.theme.boxShadow.radius};
  }
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: ${(props: StyledButton) => props.block && '100%'};
  
  border-radius: ${(props: StyledButton) => props.theme.border.radius};

  background: ${(props: StyledButton) => props.theme.palette[props.elementColor].base};
  background: ${(props: StyledButton) => isAlternateButton(props.elementStyle) && 'transparent'};
  background: ${(props: StyledButton) => (props.disabled && !props.loading) && props.theme.palette.disabled.background};
  
  border-width: 1px;
  border-style: solid;
  border-style: ${(props: StyledButton) => props.elementStyle === 'dashed' && 'dashed'};
  border-color: ${(props: StyledButton) => props.theme.palette[props.elementColor].base};
  border-color: ${(props: StyledButton) => isSubtleButton(props.elementStyle) && 'transparent'};
  border-color: ${(props: StyledButton) => (props.disabled && !props.loading) && props.theme.palette.disabled.border};

  color: ${(props: StyledButton) => props.theme.palette[props.elementColor].fontColor};
  color: ${(props: StyledButton) => isAlternateButton(props.elementStyle) && props.theme.palette[props.elementColor].outlineFontColor};
  color: ${(props: StyledButton) => (props.disabled && !props.loading) && props.theme.palette.disabled.color};
  
  
  cursor: pointer;
  height: ${(props: StyledButton) => props.theme.button.height[props.elementSize]};
  padding: 0 12px;
  position: relative;
  transition:
    background-color ${(props: StyledButton) => props.theme.transitionTime},
    border-color ${(props: StyledButton) => props.theme.transitionTime};

  &:enabled {
    &:hover {
      background: ${(props: StyledButton) => props.theme.palette[props.elementColor].medium};
      background: ${(props: StyledButton) => isBorderedButton(props.elementStyle) && props.theme.palette[props.elementColor].base};
      background: ${(props: StyledButton) => isSubtleButton(props.elementStyle) && 'rgba(0, 0, 0, 0.03)'};
      
      border-color: ${(props: StyledButton) => props.theme.palette[props.elementColor].medium};
      border-color: ${(props: StyledButton) => isBorderedButton(props.elementStyle) && props.theme.palette[props.elementColor].base};
      border-color: ${(props: StyledButton) => isSubtleButton(props.elementStyle) && 'transparent'};
      
      color: ${(props: StyledButton) => isBorderedButton(props.elementStyle) && 'white'};
    }
    
    &:active {
      background: ${(props: StyledButton) => props.theme.palette[props.elementColor].dark};
      background: ${(props: StyledButton) => isAlternateButton(props.elementStyle) && props.theme.palette[props.elementColor].medium};
      background: ${(props: StyledButton) => isSubtleButton(props.elementStyle) && 'rgba(0, 0, 0, 0.07)'};
      
      border-color: ${(props: StyledButton) => props.theme.palette[props.elementColor].dark};
      border-color: ${(props: StyledButton) => isAlternateButton(props.elementStyle) && props.theme.palette[props.elementColor].medium};
      border-color: ${(props: StyledButton) => isSubtleButton(props.elementStyle) && 'transparent'};
      
      color: ${(props: StyledButton) => isBorderedButton(props.elementStyle) && 'white'};
    }
    
    &:focus {
      outline: 0;
      box-shadow:
        ${(props: StyledButton) => `
          inset 0 0 0px 0 ${props.theme.palette[props.elementColor].shadow},
          inset 0 0 0 1px transparent,
          0 0 0 ${props.theme.boxShadow.width} ${props.theme.palette[props.elementColor].shadow}
        `};
      box-shadow:
        ${(props: StyledButton) => isSubtleButton(props.elementStyle) && `
          inset 0 0 0px 0 rgba(0, 0, 0, 0.05),
          inset 0 0 0 1px transparent,
          0 0 0 ${props.theme.boxShadow.width} rgba(0, 0, 0, 0.05)
        `};
      z-index: 1;
    }
  }
  &:disabled {
    cursor: initial;
  }
`;
