import React from 'react';
import {useTheme} from '@emblem-ui/styles';

import {StyledNavigationWraper} from './Navigation.styles';

const NavigationWrapper = ({children}) => {
  const theme = useTheme();
  return (
    <StyledNavigationWraper theme={theme}>
      {children}
    </StyledNavigationWraper>
  );
};

export default NavigationWrapper;
