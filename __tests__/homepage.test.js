import 'cross-fetch/polyfill';
import { screen, render, cleanup, waitFor, act } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { MyPokemonProvider } from '../context/mypokemon';
import { MockedProvider } from '@apollo/client/testing';
import theme from '../styles/theme';
import React from 'react';
import HomePage from '../pages';
import { GET_POKEMONS } from '../queries';

const localPokemon = [
  {
    catch_id: 1,
    id: 2,
    name: 'caterpie',
    nickname: 'ulet',
    sprites: 'https://raw.github.com/sprite/caterpie',
  },
];

const mocks = [
  {
    request: {
      query: GET_POKEMONS,
      variables: { offset: 0, limit: 20 },
    },
    result: {
      data: {
        pokemons: {
          count: 1126,
          results: [
            {
              id: 1,
              name: 'bulbasaur',
              artwork:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
            },
            {
              id: 2,
              name: 'caterpie',
              artwork:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
            },
          ],
        },
      },
    },
  },
];

const pokemons = {
  count: 1126,
  results: [
    {
      id: 1,
      name: 'bulbasaur',
      artwork:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      id: 2,
      name: 'caterpie',
      artwork:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
  ],
};

afterEach(() => {
  cleanup();
});

describe('test render hero & pokemon list', () => {
  test('render hero', () => {
    localStorage.setItem('mypokemon', JSON.stringify(localPokemon));
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ThemeProvider theme={theme}>
          <MyPokemonProvider>
            <HomePage pokemons={pokemons} />
          </MyPokemonProvider>
        </ThemeProvider>
      </MockedProvider>
    );

    expect(screen.getByText('Pokepedia')).toBeInTheDocument;
    expect(screen.getByText('Temukan pokemon favoritmu')).toBeInTheDocument;
  });

  test('render pokemon list uncaught pokemon', () => {
    localStorage.setItem('mypokemon', JSON.stringify(localPokemon));
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ThemeProvider theme={theme}>
          <MyPokemonProvider>
            <HomePage pokemons={pokemons} />
          </MyPokemonProvider>
        </ThemeProvider>
      </MockedProvider>
    );

    expect(screen.getByText('#1')).toBeInTheDocument;
    expect(screen.getByText('bulbasaur')).toBeInTheDocument;
  });

  test('render pokemon list caught pokemon', () => {
    localStorage.setItem('mypokemon', JSON.stringify(localPokemon));
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ThemeProvider theme={theme}>
          <MyPokemonProvider>
            <HomePage pokemons={pokemons} />
          </MyPokemonProvider>
        </ThemeProvider>
      </MockedProvider>
    );

    expect(screen.getByText('#2')).toBeInTheDocument;
    expect(screen.getByText('caterpie')).toBeInTheDocument;
    expect(screen.getByText('1')).toBeInTheDocument;
  });
});
