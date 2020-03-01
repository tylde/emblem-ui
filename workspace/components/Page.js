import React, {useEffect, useMemo, useRef, useState} from 'react';

import Meta from './Meta';
import Navigation from './Navigation/Navigation';
import Header from './Header/Header';
import Footer from './Footer';
import Wrapper from './Wrapper';
import NavigationWrapper from './Navigation/NavigationWrapper';
import ContentWrapper from './ContentWrapper';
import useApp from '../hooks/useApp';

const Page = ({
  children
}) => {
  const [navigationTop, setNavigationTop] = useState(0);
  const [navigationBottom, setNavigationBottom] = useState(0);

  const {isMenuOpened} = useApp();

  const appRef = useRef();
  const headerRef = useRef();
  const footerRef = useRef();

  const calculateNavigationPosition = () => {
    const {scrollTop, scrollHeight, offsetHeight} = appRef.current;
    const {offsetHeight: headerHeight} = headerRef.current;
    const {offsetHeight: footerHeight} = footerRef.current;

    const top = headerHeight - scrollTop;
    const bottom = footerHeight - (scrollHeight - offsetHeight - scrollTop);

    setNavigationTop(top > 0 ? top : 0);
    setNavigationBottom(bottom > 0 ? bottom : 0);
  };

  const handlePageScroll = () => {
    calculateNavigationPosition();
  };

  useEffect(() => {
    calculateNavigationPosition();
  }, []);

  const appStyle = useMemo(() => ({overflow: isMenuOpened ? 'hidden' : 'auto'}), [isMenuOpened]);

  return (
    <div className='app' ref={appRef} onScroll={handlePageScroll} style={appStyle}>
      <Meta />
      <Header headerRef={headerRef} />
      <Wrapper>
        <NavigationWrapper>
          <Navigation navigationTop={navigationTop} navigationBottom={navigationBottom} />
        </NavigationWrapper>
        <ContentWrapper>
          <div className='app-content'>
            <main className='app-main'>
              {children}
            </main>
          </div>
        </ContentWrapper>
      </Wrapper>
      <Footer footerRef={footerRef} />
    </div>
  );
};

export default Page;
