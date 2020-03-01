import React, {useCallback, useEffect} from 'react';

import AppContext from './AppContext';
import useToggle from '../../hooks/useToggle';

const AppProvider = ({
  children
}) => {
  const [isMenuOpened, toggleIsMenuOpen, setIsMenuOpen] = useToggle(false);

  const onResize = useCallback(() => {
    if (isMenuOpened && window.innerWidth >= 768) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpened, setIsMenuOpen]);

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  return (
    <AppContext.Provider value={{isMenuOpened, toggleIsMenuOpen, setIsMenuOpen}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
