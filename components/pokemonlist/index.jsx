import React, { useEffect } from 'react';
import Flexbox from '../common/flexbox';
import PokemonCard from '../pokemoncard';
import PokemonCardSkeleton from '../pokemoncard/skeleton';
import PropTypes from 'prop-types';

const Pokemonlist = ({ data, loading }) => {
  return (
    <Flexbox dir="column" p="16px">
      {data.map((d) => (
        <PokemonCard key={d.id} data={d} />
      ))}

      {loading &&
        [1, 2, 3].map((v) => (
          <PokemonCardSkeleton key={v} data-testid="pokemon-loading" />
        ))}
    </Flexbox>
  );
};

Pokemonlist.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      artwork: PropTypes.string.isRequired,
    })
  ),
  loading: PropTypes.bool,
};

export default Pokemonlist;
