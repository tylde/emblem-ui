import React from 'react';

const DarkModeContext = React.createContext({
  darkMode: false,
  setDarkMode: () => {}
});

export default DarkModeContext;
