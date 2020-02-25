import React from 'react';

import {EmblemUITheme} from '../theme/theme.interface';

import defaultTheme from '../theme/defaultTheme';

const ThemeContext = React.createContext<EmblemUITheme>(defaultTheme);

export default ThemeContext;
