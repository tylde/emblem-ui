import React from 'react';

import './Wrapper.scss';

const Wrapper = ({children}) => (
  <header className='app-wrapper'>
    {children}
  </header>
);

Wrapper.propTypes = {};

Wrapper.defaultProps = {};

export default Wrapper;
