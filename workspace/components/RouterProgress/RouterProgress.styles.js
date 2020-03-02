import styled from 'styled-components';

export const StyledRouterProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  z-index: var(--z-index-router-progress);
  pointer-events: none;
`;

export const StyledRouterProgressBarIndicator = styled.div`
    width: ${(props) => 100 * props.progress}%;
    height: 100%;
    background: #3498DB;
    transition: width ease-in-out 250ms;
`;
