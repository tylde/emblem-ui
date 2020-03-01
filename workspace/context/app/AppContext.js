import React from 'react';

const AppContent = React.createContext({
  isMenuOpened: false,
  toggleIsMenuOpen: () => {},
  setIsMenuOpen: () => {}
});

export default AppContent;
