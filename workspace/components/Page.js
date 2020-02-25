import React from 'react';

import Meta from './Meta';
import Navigation from './Navigation';

const Page = ({
  children
}) => {
  return (
    <div className='app'>
      <Meta />
      <Navigation />
      <main className='app-content'>
        {children}
      </main>
    </div>
  );
};

export default Page;
