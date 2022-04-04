import React, { useState, useContext } from 'react';
import { Wrapper } from './style';
import Img from '../common/img';
import Modal from '../modal';
import CatchLoading from './loading';
import CatchSuccess from './success';
import CatchFailed from './failed';
import Flexbox from '../common/flexbox';
import PropTypes from 'prop-types';
import { getLocalItem } from '../../utilities';
import { ADD_POKEMON, myPokemonStore } from '../../context/mypokemon';

const CatchPokemon = ({ pokemon }) => {
  const { dispatch } = useContext(myPokemonStore);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(undefined);

  const handleCatch = () => {
    setIsLoading(true);
    setIsOpen(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(Math.random() < 0.5);
    }, 3000);
  };

  const handleSave = (val) => {
    const localPokemon = getLocalItem('mypokemon');
    const sameName = localPokemon?.find((p) => p.nickname == val.nickname);
    if (sameName) {
      setError('nama sudah dipakai');
      return;
    }

    const data = { catch_id: localPokemon?.length || 0, ...val };
    dispatch({ type: ADD_POKEMON, payload: data });
    setIsOpen(false);
  };

  return (
    <>
      <Wrapper>
        <Img
          role="button"
          w="32px"
          h="32px"
          alt="catch"
          aria-label="catch"
          src="/assets/svg/pokeball_icon.svg"
          onClick={handleCatch}
        />
      </Wrapper>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Flexbox jc="center" ai="center" p="8px" minH="200px">
          {isLoading ? (
            <CatchLoading />
          ) : isSuccess ? (
            <CatchSuccess pokemon={pokemon} err={error} onSave={handleSave} />
          ) : (
            <CatchFailed />
          )}
        </Flexbox>
      </Modal>
    </>
  );
};

CatchPokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    sprites: PropTypes.string.isRequired,
  }).isRequired,
};

export default CatchPokemon;
