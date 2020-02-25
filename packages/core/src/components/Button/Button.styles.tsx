/* eslint-disable max-len */
import styled from 'styled-components';
import {EmblemUITheme} from '@emblem-ui/styles';
import {ElementColor, ElementSize} from '../../interface/element.interface';

interface StyledChildren {
  readonly isLoading?: boolean
}

export const StyledChildren = styled.span<StyledChildren>`
  opacity: ${(props: StyledChildren) => (props.isLoading ? 0 : 1)};
  white-space: nowrap;
  user-select: none;
  pointer-events: none;
`;

interface StyledButton {
  readonly color: ElementColor;
  readonly isDisabled: boolean;
  readonly isLoading: boolean;
  readonly outline: boolean;
  readonly elementSize: ElementSize;
  readonly theme: EmblemUITheme
}

export const StyledButton = styled.button<StyledButton>`
  ${(props: StyledButton) => props.theme.globalStyle}

  &::before, &::after {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    border-radius: ${(props: StyledButton) => props.theme.boxShadow.radius};
  }
  
  border-radius: ${(props: StyledButton) => props.theme.border.radius};

  background: ${(props: StyledButton) => props.theme.palette[props.color].base};
  background: ${(props: StyledButton) => props.outline && 'transparent'};
  background: ${(props: StyledButton) => props.isDisabled && props.theme.disabled.background};
  
  border-width: 1px;
  border-style: solid;
  border-color: ${(props: StyledButton) => props.theme.palette[props.color].base};
  border-color: ${(props: StyledButton) => props.isDisabled && props.theme.disabled.border};
  
  color: ${(props: StyledButton) => props.theme.palette[props.color].fontColor};
  color: ${(props: StyledButton) => props.outline && props.theme.palette[props.color].base};
  color: ${(props: StyledButton) => props.isDisabled && props.theme.disabled.color};
  
  
  cursor: pointer;
  height: ${(props: StyledButton) => props.theme.button.height[props.elementSize]};
  padding: 0 12px;
  position: relative;
  transition: background-color ${(props: StyledButton) => props.theme.transitionTime}, border-color ${(props: StyledButton) => props.theme.transitionTime};

  &:enabled {
    &:hover {
      background: ${(props: StyledButton) => props.theme.palette[props.color].medium};
      background: ${(props: StyledButton) => props.outline && props.theme.palette[props.color].base};
      
      border-color: ${(props: StyledButton) => props.theme.palette[props.color].medium};
      border-color: ${(props: StyledButton) => props.outline && props.theme.palette[props.color].base};
      
      color: ${(props: StyledButton) => props.outline && 'white'};
    }
    
    &:active {
      background: ${(props: StyledButton) => props.theme.palette[props.color].dark};
      background: ${(props: StyledButton) => props.outline && props.theme.palette[props.color].medium};
      
      border-color: ${(props: StyledButton) => props.theme.palette[props.color].dark};
      border-color: ${(props: StyledButton) => props.outline && props.theme.palette[props.color].medium};
    }
    
    &:focus {
      outline: 0;
      box-shadow:
        ${(props: StyledButton) => `
          inset 0 0 0px 0 ${props.theme.palette[props.color].shadow},
          inset 0 0 0 1px transparent,
          0 0 0 ${props.theme.boxShadow.width} ${props.theme.palette[props.color].shadow}
        `};
      z-index: 1;
    }
  }
  &:disabled {
    cursor: initial;
  }
`;
