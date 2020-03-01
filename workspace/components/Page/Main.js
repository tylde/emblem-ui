import React from 'react';

import './Main.scss';

const Main = ({children}) => (
  <main className='app-main'>
    {children}
  </main>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
