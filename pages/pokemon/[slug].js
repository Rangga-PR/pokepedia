import Head from 'next/head';
import Layout from '../../layouts';
import Appbar from '../../components/appbar';
import { GET_POKEMON } from '../../queries';
import client from '../../apollo-client';
import { useTheme } from '@emotion/react';
import PokemonHero from '../../components/pokemonhero';
import PokemonTypeBar from '../../components/pokemontypebar';
import MoveList from '../../components/movelist';

export default function PokemonDetail({ pokemon }) {
  const theme = useTheme();

  return (
    <Layout>
      <Head>
        <title>{`Pokepedia || ${pokemon?.name}`}</title>
        <meta name="description" content="Temukan pokemon favoritmu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Appbar bg={theme?.color?.[pokemon?.types?.[0]?.type?.name]} />
      <PokemonHero
        id={pokemon?.id}
        name={pokemon?.name}
        bg={theme?.color?.[pokemon?.types?.[0]?.type?.name]}
        img={pokemon?.sprites?.front_default}
      />
      <PokemonTypeBar types={pokemon?.types?.map((t) => t.type.name)} />
      <MoveList
        color={theme?.color?.[pokemon?.types?.[0]?.type?.name]}
        moves={pokemon?.moves?.map((m) => ({
          name: m.move.name,
          level: m.version_group_details[0].level_learned_at,
          method: m.version_group_details[0].move_learn_method.name,
        }))}
      />
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const { data } = await client.query({
    query: GET_POKEMON,
    variables: { name: query.slug },
  });

  return {
    props: {
      pokemon: data.pokemon,
    },
  };
}
