import React from 'react';

import Meta from './Meta';
import Navigation from './Navigation';
import Header from './Header';

const Page = ({
  children
}) => {
  return (
    <div className='app'>
      <Meta />
      <Header />
      <Navigation />
      <div className='app-wrapper'>
        <div className='app-content'>
          <main className='app-main'>
            {children}
          </main>
          <footer className='app-footer'>
            Footer
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Page;
