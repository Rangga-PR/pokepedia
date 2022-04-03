import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
