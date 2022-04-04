import React, { createContext, useReducer } from 'react';
import { getLocalItem, setLocalItem } from '../utilities';

const myPokemonStore = createContext([]);
const { Provider } = myPokemonStore;

const GET_POKEMON = 'GET_POKEMON';
const ADD_POKEMON = 'ADD_POKEMON';
const DELETE_POKEMON = 'DELETE_POKEMON';

const MyPokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const { type, payload } = action;

    switch (type) {
      case GET_POKEMON: {
        return getLocalItem('mypokemon') || [];
      }
      case ADD_POKEMON: {
        const newState = [...state, payload];
        setLocalItem('mypokemon', newState);
        return newState;
      }
      case DELETE_POKEMON: {
        const newState = state.filter((s) => s.catch_id !== payload.catch_id);
        setLocalItem('mypokemon', newState);
        return newState;
      }
      default: {
        return state;
      }
    }
  }, []);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export {
  myPokemonStore,
  GET_POKEMON,
  ADD_POKEMON,
  DELETE_POKEMON,
  MyPokemonProvider,
};
