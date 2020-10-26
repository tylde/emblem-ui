import React from 'react';

import {EmblemUITheme} from '../theme/interface/theme.interface';

import defaultLightTheme from '../theme/lightTheme/defaultLightTheme';

const ThemeContext = React.createContext<EmblemUITheme>(defaultLightTheme);

export default ThemeContext;
