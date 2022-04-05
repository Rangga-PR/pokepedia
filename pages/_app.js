import '../styles/globals.css';
import Head from 'next/head';
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
          <Head>
            <meta charset="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"
            />
            <meta name="description" content="Temukan pokemon favoritmu" />
            <meta name="keywords" content="pokemon, compendium" />
            <link rel="manifest" href="/manifest.json" />
            <link
              href="/favicon-16x16.png"
              rel="icon"
              type="image/png"
              sizes="16x16"
            />
            <link
              href="/favicon-32x32.png"
              rel="icon"
              type="image/png"
              sizes="32x32"
            />
            <link rel="apple-touch-icon" href="/apple-icon.png"></link>
            <meta name="theme-color" content="#FF5959" />
          </Head>
          <Component {...pageProps} />
        </MyPokemonProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
