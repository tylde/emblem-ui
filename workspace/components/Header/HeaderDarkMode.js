import React from 'react';
import {Button} from '@emblem-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import useDarkMode from '../../hooks/useDarkMode';

import {StyledHeaderDarkMode, StyledHeaderIcon} from './Header.styles';

const HeaderDarkMode = () => {
  const {darkMode, setDarkMode} = useDarkMode();

  const icon = darkMode
    ? <FontAwesomeIcon icon={['far', 'sun']} />
    : <FontAwesomeIcon icon={['far', 'moon']} />;
  return (
    <StyledHeaderDarkMode>
      <Button elementColor='dark' elementStyle='subtle' onClick={() => setDarkMode(!darkMode)} elementSize='large'>
        <StyledHeaderIcon>
          {icon}
        </StyledHeaderIcon>
      </Button>
    </StyledHeaderDarkMode>
  );
};

HeaderDarkMode.propTypes = {};

HeaderDarkMode.defaultProps = {};

export default HeaderDarkMode;
