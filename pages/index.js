import Head from 'next/head';
import Layout from '../layouts';
import Appbar from '../components/appbar';
import Hero from '../components/hero';
import Pokemonlist from '../components/pokemonlist';
import { GET_POKEMONS } from '../queries';
import client from '../apollo-client';
import { useEffect, useState, useCallback, useContext } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_MY_POKEMON, myPokemonStore } from '../context/mypokemon';

export default function Home({ pokemons }) {
  const limit = 20;
  const { state, dispatch } = useContext(myPokemonStore);
  const [pokemonList, setPokemonList] = useState(pokemons?.results || []);
  const [offset, setOffset] = useState(limit);
  const [hasMore, setHasMore] = useState(
    pokemons?.results?.length >= pokemons.count ? false : true
  );
  const [getPokemons, { loading, data }] = useLazyQuery(GET_POKEMONS, {
    variables: { offset, limit },
  });

  useEffect(() => {
    dispatch({ type: GET_MY_POKEMON });
  }, [dispatch]);

  const handleFetchMore = useCallback(() => {
    hasMore &&
      getPokemons({
        variables: { offset, limit },
      }).then((res) => {
        const nextOffset = offset + limit;
        setOffset(nextOffset);
        setPokemonList([...pokemonList, ...res.data.pokemons.results]);
        nextOffset >= res.data.count && setHasMore(false);
      });
  }, [hasMore, getPokemons, offset, pokemonList]);

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.scrollTop +
        document.documentElement.clientHeight >=
        document.documentElement.scrollHeight - 80 && handleFetchMore();
    };

    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleFetchMore]);

  return (
    <Layout>
      <Head>
        <title>Pokepedia</title>
        <meta name="description" content="Temukan pokemon favoritmu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Appbar />
      <Hero />
      <Pokemonlist data={pokemonList} localData={state} loading={loading} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_POKEMONS,
    variables: { offset: 0, limit: 20 },
  });

  return {
    props: {
      pokemons: data.pokemons,
    },
  };
}
