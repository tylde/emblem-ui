import React from 'react';

import Meta from './Meta';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import Wrapper from './Wrapper';
import NavigationWrapper from './NavigationWrapper';
import ContentWrapper from './ContentWrapper';

const Page = ({
  children
}) => {
  return (
    <div className='app'>
      <Meta />
      <Header />
      <Wrapper>
        <NavigationWrapper>
          <Navigation />
        </NavigationWrapper>
        <ContentWrapper>
          <div className='app-content'>
            <main className='app-main'>
              {children}
            </main>
          </div>
        </ContentWrapper>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Page;
