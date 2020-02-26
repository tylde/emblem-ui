import React from 'react';
import Link from 'next/link';

const NavigationElement = ({
  children,
  href
}) => (
  <Link href={href}>
    <a className='app-navigation-element'>
      {children}
    </a>
  </Link>
);

NavigationElement.propTypes = {};

NavigationElement.defaultProps = {};

export default NavigationElement;
