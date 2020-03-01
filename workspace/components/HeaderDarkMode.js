import React from 'react';
import {Button} from '@emblem-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import useDarkMode from '../hooks/useDarkMode';

const HeaderDarkMode = () => {
  const {darkMode, setDarkMode} = useDarkMode();

  const icon = darkMode
    ? <FontAwesomeIcon icon={['far', 'sun']} />
    : <FontAwesomeIcon icon={['far', 'moon']} />;
  return (
    <div className='app-header__dark-mode'>
      <Button elementColor='dark' elementStyle='subtle' onClick={() => setDarkMode(!darkMode)} elementSize='large'>
        <div className='app-header__icon'>
          {icon}
        </div>
      </Button>
    </div>
  );
};

HeaderDarkMode.propTypes = {};

HeaderDarkMode.defaultProps = {};

export default HeaderDarkMode;
