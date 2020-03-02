import React from 'react';
import {useTheme} from '@emblem-ui/styles';

import HeaderContentContainer from './HeaderContentContainer';
import HeaderDarkMode from './HeaderDarkMode';
import HeaderLinks from './HeaderLinks';
import HeaderLogo from './HeaderLogo';
import HeaderMenuButton from './HeaderMenuButton';
import HeaderNavigation from './HeaderNavigation';

import {
  StyledHeader,
  StyledHeaderContent,
  StyledHeaderContentWrapper,
  StyledHeaderLeftWrapper,
  StyledHeaderWrapper
} from './Header.styles';

const Header = ({headerRef}) => {
  const theme = useTheme();
  return (
    <StyledHeader ref={headerRef} theme={theme}>
      <HeaderNavigation />
      <StyledHeaderWrapper>
        <StyledHeaderLeftWrapper />
        <StyledHeaderContentWrapper>
          <StyledHeaderContent>
            <HeaderContentContainer>
              <HeaderMenuButton />
            </HeaderContentContainer>
            <HeaderContentContainer>
              <HeaderDarkMode />
              <HeaderLinks />
            </HeaderContentContainer>
          </StyledHeaderContent>
          <HeaderLogo />
        </StyledHeaderContentWrapper>
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
