import React from 'react';

import NavigationContent from './NavigationContent';
import useApp from '../../hooks/useApp';

const NavigationHeader = () => {
  const {isMenuOpened} = useApp();

  if (!isMenuOpened) {
    return null;
  }
  return (
    <nav className='app-navigation-header'>
      <NavigationContent />
    </nav>
  );
};

export default NavigationHeader;
