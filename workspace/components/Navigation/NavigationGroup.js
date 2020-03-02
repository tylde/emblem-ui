import React from 'react';

import {StyledNavigationGroup, StyledNavigationGroupTitle} from './Navigation.styles';

const NavigationGroup = ({
  children,
  title
}) => (
  <StyledNavigationGroup>
    {title && <StyledNavigationGroupTitle>{title}</StyledNavigationGroupTitle>}
    {children}
  </StyledNavigationGroup>
);

NavigationGroup.propTypes = {};

NavigationGroup.defaultProps = {};

export default NavigationGroup;
