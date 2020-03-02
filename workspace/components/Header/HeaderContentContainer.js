import React from 'react';

import {StyledHeaderContentContainer} from './Header.styles';

const HeaderContentContainer = ({children}) => (
  <StyledHeaderContentContainer>
    {children}
  </StyledHeaderContentContainer>
);

export default HeaderContentContainer;
