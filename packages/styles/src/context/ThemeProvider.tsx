import React, {useMemo} from 'react';

import ThemeContext from './ThemeContext';
import {EmblemUITheme} from '..';
import defaultDarkTheme from '../theme/darkTheme/defaultDarkTheme';
import defaultLightTheme from '../theme/lightTheme/defaultLightTheme';

interface ThemeProvider {
  children?: React.ReactNode;
  darkMode: boolean;
  darkTheme?: EmblemUITheme;
  lightTheme?: EmblemUITheme;
}

const ThemeProvider: React.FC<ThemeProvider> = ({
  children,
  darkMode,
  darkTheme = defaultDarkTheme,
  lightTheme = defaultLightTheme
}) => {
  const theme: EmblemUITheme = useMemo(
    () => (darkMode ? darkTheme : lightTheme),
    [darkMode, darkTheme, lightTheme]
  );
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
