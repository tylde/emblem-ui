import React from 'react';
import App from 'next/app';

import '../icons/iconLibrary';

import AppProvider from '../context/app/AppProvider';
import DarkModeProvider from '../context/darkmode/DarkModeProvider';
import GlobalStyle from '../components/Page/GlobalStyles';
import Page from '../components/Page/Page';
import RouterProgress from '../components/RouterProgress/RouterProgress';

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps;
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps = {query: ctx.query};
    return {pageProps};
  }

  render() {
    const {Component} = this.props;
    return (
      <AppProvider>
        <DarkModeProvider>
          <RouterProgress animationDuration={300} incrementDuration={500} minimum={0.1} />
          <GlobalStyle />
          <Page>
            <Component />
          </Page>
        </DarkModeProvider>
      </AppProvider>
    );
  }
}

export default MyApp;
