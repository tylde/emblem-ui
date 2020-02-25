import styled from 'styled-components';
import {EmblemUITheme} from '@emblem-ui/styles';

import {ElementSize} from '../../interface/element.interface';

interface StyledInput {
  readonly isError?: boolean;
  readonly isInfo?: boolean;
  readonly isSuccess?: boolean;
  readonly isWarning?: boolean;
  readonly elementSize: ElementSize
  readonly theme: EmblemUITheme;
}

export const StyledInput = styled.input<StyledInput>`
    width: 100%;
    border-radius: ${(props: StyledInput) => props.theme.border.radius};
    font-size: 14px;
    padding: 0 ${(props: StyledInput) => props.theme.input.horizontalPadding};
    height: ${(props: StyledInput) => props.theme.input.height[props.elementSize]};
    background: transparent;
    
    border-width: 1px;
    border-style: solid;
    border-color: ${(props: StyledInput) => props.theme.border.color};
    border-color: ${(props: StyledInput) => props.isInfo && props.theme.palette.info.base};
    border-color: ${(props: StyledInput) => props.isSuccess && props.theme.palette.success.base};
    border-color: ${(props: StyledInput) => props.isWarning && props.theme.palette.warning.base};
    border-color: ${(props: StyledInput) => props.isError && props.theme.palette.danger.base};

    &:enabled {
      &:hover {
        border-color: ${(props: StyledInput) => props.theme.border.hover}
      }
      
      &:focus {
        outline: 0;
        box-shadow:
          ${(props: StyledInput) => `
            inset 0 0 0px 0 ${props.theme.palette.primary.shadow},
            inset 0 0 0 1px transparent,
            0 0 0 ${props.theme.boxShadow.width} ${props.theme.palette.primary.shadow}
          `};
        border-color: ${(props: StyledInput) => props.theme.palette.primary.base};
      }
    }
    
    &:disabled {
      cursor: not-allowed;
      color: #999;
    }
`;
