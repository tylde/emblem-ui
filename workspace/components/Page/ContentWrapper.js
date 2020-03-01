import React from 'react';

import './ContentWrapper.scss';

const ContentWrapper = ({children}) => (
  <div className='app-content-wrapper'>
    <div className='app-content'>
      {children}
    </div>
  </div>
);

ContentWrapper.propTypes = {};

ContentWrapper.defaultProps = {};

export default ContentWrapper;
