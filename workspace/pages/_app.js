import React from 'react';
import App from 'next/app';
import Page from '../components/Page';

import './styles/index.scss';
import './styles/app.scss';
import './styles/header.scss';
import './styles/navigation.scss';
import './styles/content.scss';
import './styles/main.scss';
import './styles/footer.scss';

import '../icons/iconLibrary';

import AppProvider from '../context/app/AppProvider';
import DarkModeProvider from '../context/darkmode/DarkModeProvider';

class MyApp extends App {
  render() {
    const {Component} = this.props;
    return (
      <AppProvider>
        <DarkModeProvider>
          <Page>
            <Component />
          </Page>
        </DarkModeProvider>
      </AppProvider>
    );
  }
}

export default MyApp;
