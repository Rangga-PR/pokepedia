import React, { useContext } from 'react';
import MyPokemonCard from '../mypokemoncard';
import PropTypes from 'prop-types';
import { Container } from './style';
import { DELETE_POKEMON, myPokemonStore } from '../../context/mypokemon';

const MyPokemonlist = ({ data }) => {
  const { dispatch } = useContext(myPokemonStore);

  const handleRelease = (val) => {
    dispatch({ type: DELETE_POKEMON, payload: val });
  };

  return (
    <Container>
      {data.map((d) => (
        <MyPokemonCard key={d.id} data={d} onRelease={handleRelease} />
      ))}
    </Container>
  );
};

MyPokemonlist.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      catch_id: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      sprites: PropTypes.string.isRequired,
    })
  ),
};

export default MyPokemonlist;
