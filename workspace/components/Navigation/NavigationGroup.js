import React from 'react';

const NavigationGroup = ({
  children,
  title
}) => (
  <div className='app-navigation-group'>
    {title && <div className='app-navigation-group__title'>{title}</div>}
    {children}
  </div>
);

NavigationGroup.propTypes = {};

NavigationGroup.defaultProps = {};

export default NavigationGroup;
