import { ApolloClient, InMemoryCache } from '@apollo/client';

export default new ApolloClient({
  uri: process.env.NEXT_PUBLIC_POKEAPI,
  ssrMode: typeof window === 'undefined',
  cache: new InMemoryCache(),
});
