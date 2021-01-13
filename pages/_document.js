import Document, { Head, Main, NextScript,Html } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Footer from '../components/layouts/Footer.component';
import Header from '../components/layouts/Header.component';
import { GlobalStyles } from '../components/utils/GlobalStyles';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head />
        <GlobalStyles /> 
        <body> 
          <Header />
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Html>
    );
  }
}