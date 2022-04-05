import { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../../layouts';
import Appbar from '../../components/appbar';
import { GET_POKEMON } from '../../queries';
import { useRouter } from 'next/router';
import { useTheme } from '@emotion/react';
import PokemonHero from '../../components/pokemonhero';
import PokemonTypeBar from '../../components/pokemontypebar';
import MoveList from '../../components/movelist';
import CatchPokemon from '../../components/catchpokemon';
import { useQuery } from '@apollo/client';

export default function PokemonDetail() {
  const { slug } = useRouter().query;
  const theme = useTheme();
  const [supportShareApi, setSupportShareApi] = useState(false);
  const { data, loading } = useQuery(GET_POKEMON, {
    skip: !slug,
    variables: { name: slug },
  });

  useEffect(() => {
    setSupportShareApi(navigator?.share ? true : false);
  }, []);

  const handleShare = () => {
    supportShareApi &&
      navigator
        ?.share({
          title: `Pokepedia || ${data?.pokemon?.name}`,
          text: `Temukan ${data?.pokemon?.name} di Pokepedia`,
          url: window.location.href,
        })
        .catch(() => {
          return;
        });
  };

  return (
    <Layout>
      <Head>
        <title>{`Pokepedia || ${data?.pokemon?.name}`}</title>
        <meta name="description" content="Temukan pokemon favoritmu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Appbar
        bg={
          loading
            ? 'transparent'
            : theme?.color?.[data?.pokemon?.types?.[0]?.type?.name]
        }
      />
      <PokemonHero
        id={data?.pokemon?.id}
        name={data?.pokemon?.name}
        bg={theme?.color?.[data?.pokemon?.types?.[0]?.type?.name]}
        img={data?.pokemon?.sprites?.front_default}
        loading={loading}
      />
      <PokemonTypeBar
        types={data?.pokemon?.types?.map((t) => t.type.name)}
        handleShare={handleShare}
        withShare={supportShareApi}
        loading={loading}
      />
      <MoveList
        color={theme?.color?.[data?.pokemon?.types?.[0]?.type?.name]}
        moves={data?.pokemon?.moves?.map((m) => ({
          name: m.move.name,
          level: m.version_group_details[0].level_learned_at,
          method: m.version_group_details[0].move_learn_method.name,
        }))}
        loading={loading}
      />
      {!loading && (
        <CatchPokemon
          pokemon={{
            id: data?.pokemon?.id,
            name: data?.pokemon?.name,
            sprites: data?.pokemon?.sprites?.front_default,
          }}
        />
      )}
    </Layout>
  );
}
