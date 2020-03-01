import {useContext} from 'react';

import DarkModeContext from '../context/darkmode/DarkModeContext';

const useDarkMode = () => useContext(DarkModeContext);

export default useDarkMode;
