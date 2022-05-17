import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "../context/AuthContext";
import theme from "../styles/theme";
import RouteGuard from "../components/RouteGuard";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
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
              <Component {...pageProps} />;
            </Layout>
          </RouteGuard>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
