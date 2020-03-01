import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import useApp from '../../hooks/useApp';

const NavigationElement = ({
  children,
  href
}) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  const {setIsMenuOpen} = useApp();
  return (
    <Link href={href}>
      <button
        type='button'
        className={`app-navigation-element ${isActive ? 'active' : 'inactive'}`.trim()}
        tabIndex={isActive ? -1 : 0}
        onClick={() => setIsMenuOpen(false)}
      >
        {children}
      </button>
    </Link>
  );
};

NavigationElement.propTypes = {};

NavigationElement.defaultProps = {};

export default NavigationElement;
