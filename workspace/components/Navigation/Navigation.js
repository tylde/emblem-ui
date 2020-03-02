import React from 'react';

import NavigationContent from './NavigationContent';

import {StyledNavigation} from './Navigation.styles';

const Navigation = ({navigationTop, navigationBottom}) => (
  <StyledNavigation top={navigationTop} bottom={navigationBottom}>
    <NavigationContent />
  </StyledNavigation>
);

export default Navigation;
