import styled from 'styled-components';
import {EmblemUITheme} from '@emblem-ui/styles';

interface StyledButtonGroup {
  readonly direction: 'horizontal' | 'vertical'
  readonly theme: EmblemUITheme;
}

export const StyledButtonGroup = styled.div<StyledButtonGroup>`
  *, &, &::before, &::after {
    box-sizing: border-box;
  }
  
  display: flex;
  flex-direction: ${(props: StyledButtonGroup) => props.direction === 'horizontal' && 'row'};
  flex-direction: ${(props: StyledButtonGroup) => props.direction === 'vertical' && 'column'};

  button {
    // display: ${(props: StyledButtonGroup) => props.direction === 'vertical' && 'block'};
  
    &:not(:first-child), &:not(:first-child)::before {
      border-top-left-radius: ${(props: StyledButtonGroup) => props.direction === 'horizontal' && 0};
      border-bottom-left-radius: ${(props: StyledButtonGroup) => props.direction === 'horizontal' && 0};

      border-top-left-radius: ${(props: StyledButtonGroup) => props.direction === 'vertical' && 0};
      border-top-right-radius: ${(props: StyledButtonGroup) => props.direction === 'vertical' && 0};
    }
    &:not(:last-child), &:not(:last-child)::before {
      border-top-right-radius: ${(props: StyledButtonGroup) => props.direction === 'horizontal' && 0};
      border-bottom-right-radius: ${(props: StyledButtonGroup) => props.direction === 'horizontal' && 0};

      border-bottom-left-radius: ${(props: StyledButtonGroup) => props.direction === 'vertical' && 0};
      border-bottom-right-radius: ${(props: StyledButtonGroup) => props.direction === 'vertical' && 0};

      border-right-color: ${(props: StyledButtonGroup) => props.direction === 'horizontal' && 'rgba(0, 0, 0, 0.2)'};
      border-bottom-color: ${(props: StyledButtonGroup) => props.direction === 'vertical' && 'rgba(0, 0, 0, 0.2)'};
    }
  }
`;
