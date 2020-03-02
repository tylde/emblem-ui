import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

import useApp from '../../hooks/useApp';
import {StyledNavigationElement} from './Navigation.styles';

const NavigationElement = ({
  children,
  href
}) => {
  const router = useRouter();
  const {setIsMenuOpen} = useApp();
  const isActive = router.pathname === href;
  return (
    <Link href={href}>
      <StyledNavigationElement
        type='button'
        isActive={isActive}
        tabIndex={isActive ? -1 : 0}
        onClick={() => setIsMenuOpen(false)}
      >
        {children}
      </StyledNavigationElement>
    </Link>
  );
};

NavigationElement.propTypes = {};

NavigationElement.defaultProps = {};

export default NavigationElement;
