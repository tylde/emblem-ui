import React from 'react';
import {useTheme} from '@emblem-ui/styles';

import NavigationContent from '../Navigation/NavigationContent';
import useApp from '../../hooks/useApp';

import {StyledHeaderNavigation} from './Header.styles';

const HeaderNavigation = () => {
  const {isMenuOpened} = useApp();
  const theme = useTheme();

  if (!isMenuOpened) {
    return null;
  }
  return (
    <StyledHeaderNavigation theme={theme}>
      <NavigationContent />
    </StyledHeaderNavigation>
  );
};

export default HeaderNavigation;
