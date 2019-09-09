import React from "react";
import { default as NextApp } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { theme } from "styled/theme";
import AppProvider from "context";

export default class extends React.Component {
  static async getInitialProps(appContext: any) {
    const appProps = await App.getInitialProps(appContext);
    Head.rewind();
    return {
      ...appProps,
    };
  }
  render() {
    return (
      <AppProvider>
        <>
          <App {...this.props} />;
        </>
      </AppProvider>
    );
  }
}

class App extends NextApp<any> {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Counsellor</title>
        </Head>

        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
