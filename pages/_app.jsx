import '../styles/globals.css';
import Head from 'next/head';
import {ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import { AuthProvider } from '../context/AuthContext';
import theme from '../styles/theme';
import RouteGuard from '../components/RouteGuard';
import store from '../components/state/store';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <AuthProvider>
          <RouteGuard>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RouteGuard>
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
