import React from 'react';

import NavigationContent from '../Navigation/NavigationContent';
import useApp from '../../hooks/useApp';

const HeaderNavigation = () => {
  const {isMenuOpened} = useApp();

  if (!isMenuOpened) {
    return null;
  }
  return (
    <nav className='app-header__navigation'>
      <NavigationContent />
    </nav>
  );
};

export default HeaderNavigation;
