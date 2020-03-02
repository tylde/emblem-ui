import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  
  top: ${(props) => props.top}px;
  bottom: ${(props) => props.bottom}px;

  width: var(--navigation-width);
  padding: 1.6rem;

  overflow: auto;

  user-select: none;

  z-index: var(--z-index-navigation);

  &::-webkit-scrollbar {
    width: 5px;
  }
`;

export const StyledNavigationGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1.2rem;

  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
`;

export const StyledNavigationGroupTitle = styled.div`
  color: #767676;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 1.3rem;
  font-weight: 700;
  padding: 0 2rem;
  margin-bottom: 0.4rem;
`;

export const StyledNavigationElement = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  height: 3.6rem;
  padding: 0 2rem;
  text-decoration: none;
  color: #000;
  border-radius: 4px;
  transition: background-color ease-in-out 150ms;
  margin-bottom: 0.4rem;
  background: ${(props) => (props.isActive ? 'rgba(0, 0, 0, 0.05)' : 'transparent')};
  pointer-events: ${(props) => props.isActive && 'none'};
  border: none;
  cursor: pointer;

  &:hover, &:focus {
    outline: 0;
    background: rgba(0, 0, 0, 0.05);
  }

  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const StyledNavigationWraper = styled.div`
  min-width: var(--navigation-width);
  width: calc((100% - var(--content-width)) / 2);
  padding-left: calc(((100% - var(--content-width)) / 2) - var(--navigation-width));

  margin-left: calc(-1 * var(--navigation-width));
  background: ${(props) => props.theme.app.background.primary};
  transition: margin-left ease-in-out 150ms, background-color ease-in-out 150ms 150ms;

  @media (min-width: 768px) {
    margin-left: 0;
    background: transparent;
    transition: margin-left ease-in-out 150ms, background-color ease-in-out 150ms;
  }
`;
