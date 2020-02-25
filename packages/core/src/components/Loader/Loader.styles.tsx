import styled from 'styled-components';
import {EmblemUITheme} from '@emblem-ui/styles';

interface StyledLoader {
  readonly alternate: boolean;
  readonly color: string;
  readonly elementSize: string;
  readonly theme: EmblemUITheme;
}

export const StyledLoader = styled.div<StyledLoader>`
  ${(props: StyledLoader) => props.theme.globalStyle}
  
  &::before {
    animation: loaderAnimation 1s linear infinite;
    border-radius: 50%;
    content: '';
    width: ${(props: StyledLoader) => props.theme.loader.height[props.elementSize]};
    height: ${(props: StyledLoader) => props.theme.loader.height[props.elementSize]};
    left: 50%;
    margin-left: calc(${(props: StyledLoader) => props.theme.loader.height[props.elementSize]} / -2);
    margin-top: calc(${(props: StyledLoader) => props.theme.loader.height[props.elementSize]} / -2);
    position: absolute;
    top: 50%;
  }
  
  &::before {
    border-width: 2px;
    border-style: solid;

    border-color: ${(props: StyledLoader) => props.theme.palette[props.color].lightest};
    border-color: ${(props: StyledLoader) => props.alternate && props.theme.palette[props.color].light};
    
    border-top-color: ${(props: StyledLoader) => props.theme.palette[props.color].base};
    border-top-color: ${(props: StyledLoader) => props.alternate && props.theme.palette[props.color].medium};
  }
  
  @keyframes loaderAnimation {
    to {transform: rotate(360deg);}
  }
`;
