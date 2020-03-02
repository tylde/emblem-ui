import Document, {Html, Head, Main, NextScript} from 'next/document';
import React from 'react';
import {ServerStyleSheet} from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    return {
      ...page,
      styles: sheet.getStyleElement()
    };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          {this.props.styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
