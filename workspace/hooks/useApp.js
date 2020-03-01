import {useContext} from 'react';

import AppContext from '../context/app/AppContext';

const useApp = () => useContext(AppContext);

export default useApp;
