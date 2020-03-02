import React from 'react';
import {Button} from '@emblem-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import useApp from '../../hooks/useApp';
import {StyledHeaderIcon, StyledHeaderMenuButton} from './Header.styles';

const HeaderMenuButton = () => {
  const {toggleIsMenuOpen} = useApp();
  return (
    <StyledHeaderMenuButton>
      <Button elementColor='dark' elementStyle='subtle' onClick={toggleIsMenuOpen} elementSize='large'>
        <StyledHeaderIcon>
          <FontAwesomeIcon icon='bars' />
        </StyledHeaderIcon>
      </Button>
    </StyledHeaderMenuButton>
  );
};

export default HeaderMenuButton;
