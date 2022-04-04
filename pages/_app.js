import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import { MyPokemonProvider } from '../context/mypokemon';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <MyPokemonProvider>
          <Component {...pageProps} />
        </MyPokemonProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
