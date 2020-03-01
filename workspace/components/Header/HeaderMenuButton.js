import React from 'react';
import {Button} from '@emblem-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import useApp from '../../hooks/useApp';

const HeaderMenuButton = () => {
  const {toggleIsMenuOpen} = useApp();
  return (
    <div className='app-header__menu-button'>
      <Button elementColor='dark' elementStyle='subtle' onClick={toggleIsMenuOpen} elementSize='large'>
        <div className='app-header__icon'>
          <FontAwesomeIcon icon='bars' />
        </div>
      </Button>
    </div>
  );
};

export default HeaderMenuButton;
