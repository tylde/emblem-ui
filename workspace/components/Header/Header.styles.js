import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: var(--header-height);
  z-index: var(--z-index-header);

  background: ${(props) => props.theme.app.background.primary};
  border-bottom: 1px solid #dedede;
  box-shadow: 1px 5px 10px -8px rgba(0, 0, 0, 0.2);

  position: fixed;

  @media (min-width: 768px) {
    position: relative;
  }
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  width: calc(2 * var(--navigation-width) + var(--content-width));
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const StyledHeaderLeftWrapper = styled.div`
  position: relative;
  height: 100%;
  width: var(--navigation-width);
  margin-left: calc(-1 * var(--navigation-width));
  transition: margin-left ease-in-out 150ms;

  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    margin-left: 0;
  }
`;

export const StyledHeaderContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--content-width);
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    padding: 0 1.6rem;
  }
`;

export const StyledHeaderContent = styled.div`
  display: flex;
  width: 100%;
  padding: 0 1.6rem;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHeaderContentContainer = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 0.8rem;
  }
`;

export const StyledHeaderNavigation = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: var(--header-height);
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.app.background.primary};

  padding: 1.6rem;

  z-index: var( --z-index-navigation-header);

  overflow: auto;

  @media (min-width: 768px) {
    display: none;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }
`;

export const StyledHeaderLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledHeaderIcon = styled.div`
  width: 2rem;
  height: 2rem;
`;

export const StyledHeaderLogo = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    color: #13293D;
    left: 50%;
    margin-left: -20px;
`;

export const StyledHeaderDarkMode = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledHeaderMenuButton = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
