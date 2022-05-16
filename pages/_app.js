import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";

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
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
