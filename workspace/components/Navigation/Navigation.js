import React, {useMemo} from 'react';

import './Navigation.scss';

import NavigationContent from './NavigationContent';

const Navigation = ({navigationTop, navigationBottom}) => {
  const navigationStyle = useMemo(
    () => ({top: navigationTop, bottom: navigationBottom}),
    [navigationTop, navigationBottom]
  );
  return (
    <nav className='app-navigation' style={navigationStyle}>
      <NavigationContent />
    </nav>
  );
};

export default Navigation;
