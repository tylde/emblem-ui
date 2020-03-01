import React from 'react';
import App from 'next/app';

import '../styles/index.scss';
import '../styles/variables.scss';

import '../icons/iconLibrary';

import Page from '../components/Page/Page';

import AppProvider from '../context/app/AppProvider';
import DarkModeProvider from '../context/darkmode/DarkModeProvider';
import RouterProgress from '../components/RouterProgress/RouterProgress';

class MyApp extends App {
  render() {
    const {Component} = this.props;
    return (
      <AppProvider>
        <DarkModeProvider>
          <RouterProgress animationDuration={300} incrementDuration={500} minimum={0.1} />
          <Page>
            <Component />
          </Page>
        </DarkModeProvider>
      </AppProvider>
    );
  }
}

export default MyApp;
