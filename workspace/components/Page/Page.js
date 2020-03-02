import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {useTheme} from '@emblem-ui/styles';

import ContentWrapper from './ContentWrapper';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from './Main';
import Meta from './Meta';
import Navigation from '../Navigation/Navigation';
import NavigationWrapper from '../Navigation/NavigationWrapper';
import Wrapper from './Wrapper';

import useApp from '../../hooks/useApp';

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  overflow: ${(props) => (props.isMenuOpened ? 'hidden' : 'auto')};
  background: ${(props) => props.theme.app.background.secondary};
`;

const Page = ({
  children
}) => {
  const [navigationTop, setNavigationTop] = useState(0);
  const [navigationBottom, setNavigationBottom] = useState(0);

  const theme = useTheme();

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


  return (
    <StyledPage ref={appRef} onScroll={handlePageScroll} isMenuOpened={isMenuOpened} theme={theme}>
      <Meta />
      <Header headerRef={headerRef} />
      <Wrapper>
        <NavigationWrapper>
          <Navigation navigationTop={navigationTop} navigationBottom={navigationBottom} />
        </NavigationWrapper>
        <ContentWrapper>
          <Main>
            {children}
          </Main>
        </ContentWrapper>
      </Wrapper>
      <Footer footerRef={footerRef} />
    </StyledPage>
  );
};

export default Page;
