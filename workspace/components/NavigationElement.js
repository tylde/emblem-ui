import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

const NavigationElement = ({
  children,
  href
}) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link href={href}>
      <a className={`app-navigation-element ${isActive && 'active'}`.trim()} tabIndex={isActive ? -1 : 0}>
        {children}
      </a>
    </Link>
  );
};

NavigationElement.propTypes = {};

NavigationElement.defaultProps = {};

export default NavigationElement;
