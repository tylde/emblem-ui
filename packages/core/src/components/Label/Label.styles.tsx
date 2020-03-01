import styled from 'styled-components';
import {EmblemUITheme} from '@emblem-ui/styles';

interface StyledLabel {
  readonly block: boolean;
  readonly inline: boolean;
  readonly disabled: boolean;
}

export const StyledLabel = styled.label<StyledLabel>`
  *, &, &::before, &::after {
    box-sizing: border-box;
  }

  display: ${(props: StyledLabel) => props.block && 'flex'};
  flex-direction: ${(props: StyledLabel) => props.block && 'column'};

  display: ${(props: StyledLabel) => props.inline && 'inline-flex'};
  align-items: ${(props: StyledLabel) => props.inline && 'center'};
  vertical-align: ${(props: StyledLabel) => props.inline && 'middle'};
  
  cursor: ${(props: StyledLabel) => (props.disabled ? 'inherit' : 'pointer')};
    
  & > *:not(:last-child) {
    margin-right: ${(props: StyledLabel) => props.inline && '1rem'};
  }
`;

interface StyledLabelText {
  readonly disabled: boolean;
  readonly userSelect: boolean;
  readonly theme: EmblemUITheme
}

export const StyledLabelText = styled.span<StyledLabelText>`
  user-select: ${(props: StyledLabelText) => (props.userSelect ? 'inherit' : 'none')};
  color: ${(props: StyledLabelText) => props.disabled && '#767676'};
`;
