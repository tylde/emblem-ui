import React from 'react';

import DarkModeContext from './DarkModeContext';
import useLocalStorage from '../../hooks/useLocalStorage';

const DarkModeProvider = ({
  children
}) => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  return (
    <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
