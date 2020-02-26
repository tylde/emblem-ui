import React from 'react';
import App from 'next/app';
import Page from '../components/Page';

import './styles/index.scss';
import './styles/app.scss';

class MyApp extends App {
  render() {
    const {Component} = this.props;
    return (
      <Page>
        <Component />
      </Page>
    );
  }
}

export default MyApp;
