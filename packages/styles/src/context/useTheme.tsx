import {useContext} from 'react';

import {EmblemUITheme} from '../theme/theme.interface';

import ThemeContext from './ThemeContext';

const useTheme = () => useContext<EmblemUITheme>(ThemeContext);

export default useTheme;
