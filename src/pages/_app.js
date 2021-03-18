import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { withRouter } from 'next/router';
import { PrimaryTheme } from '@pickle/themes';
import { GlobalStyle, Header } from '../styles/global';
import { wrapper } from '../store/configureStore';

const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>NextJS Starter</title>
            <meta property="og:title" content="LPG Site Title" key="title" />
            <meta name="theme-color" content="#5bbad5" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
            <link rel="manifest" href="/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        </Head>
        <ThemeProvider theme={PrimaryTheme}>
            <GlobalStyle />
            <Header>
                <img src="/assets/logo.png" alt="" width="100" align="center" />
            </Header>
            <Component {...pageProps} />
        </ThemeProvider>
    </>
);

App.defaultProps = {
    pageProps: {},
};

App.propTypes = {
    pageProps: PropTypes.any,
    Component: PropTypes.any.isRequired,
};

export default wrapper.withRedux(withRouter(App));
