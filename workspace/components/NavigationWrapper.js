import React from 'react';

const NavigationWrapper = ({children}) => (
  <div className='app-navigation-wrapper'>
    {children}
  </div>
);

NavigationWrapper.propTypes = {};

NavigationWrapper.defaultProps = {};

export default NavigationWrapper;
