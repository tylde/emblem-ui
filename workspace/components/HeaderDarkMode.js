import React from 'react';

import {Switch} from '@emblem-ui/form';
import useDarkMode from '../hooks/useDarkMode';

const HeaderDarkMode = (props) => {
  const {darkMode, setDarkMode} = useDarkMode();
  return (
    <div className='app-header__content__mode'>
      <Switch
        checked={darkMode}
        checkedIcon='none'
        componentId='dark-mode'
        elementColor='dark'
        onChange={() => setDarkMode(!darkMode)}
      />
    </div>
  );
};

HeaderDarkMode.propTypes = {};

HeaderDarkMode.defaultProps = {};

export default HeaderDarkMode;
