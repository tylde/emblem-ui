import {useContext} from 'react';

import {EmblemUITheme} from '../theme/interface/theme.interface';

import ThemeContext from './ThemeContext';

const useTheme = () => useContext<EmblemUITheme>(ThemeContext);

export default useTheme;
