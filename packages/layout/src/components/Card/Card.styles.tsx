import styled, {css} from 'styled-components';
import {EmblemUITheme} from '@emblem-ui/styles';

const elementBoxSizing = css`
  &, &::before, &::after {
    box-sizing: border-box;
  }
`;

interface StyledCard {
  readonly theme: EmblemUITheme;
}

export const StyledCard = styled.div<StyledCard>`
  ${elementBoxSizing};
  
  background: #fff;
  padding: 16px;
  border-radius: 2px;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.5);
`;
