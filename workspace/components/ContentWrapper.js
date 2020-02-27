import React from 'react';

const ContentWrapper = ({children}) => {
  return (
    <div className='app-content-wrapper'>
      {children}
    </div>
  );
};

ContentWrapper.propTypes = {};

ContentWrapper.defaultProps = {};

export default ContentWrapper;
