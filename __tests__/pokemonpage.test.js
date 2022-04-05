import 'cross-fetch/polyfill';
import { screen, render, cleanup, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@emotion/react';
import { MyPokemonProvider } from '../context/mypokemon';
import theme from '../styles/theme';
import React from 'react';
import PokemonPage from '../pages/pokemon/[slug].js';
import ReactDOM from 'react-dom';

const localPokemon = [
  {
    catch_id: 1,
    id: 1,
    name: 'bulbasaur',
    nickname: 'kobis',
    sprites: 'https://raw.github.com/sprite/bulbasaur',
  },
];

const pokemon = {
  id: 10,
  name: 'caterpie',
  sprites: {
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
  },
  moves: [
    {
      move: {
        name: 'tackle',
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
          },
        },
      ],
    },
  ],
  types: [
    {
      type: {
        name: 'bug',
      },
    },
  ],
};

beforeAll(() => {
  ReactDOM.createPortal = jest.fn((element) => {
    return element;
  });
});

afterAll(() => {
  ReactDOM.createPortal.mockClear();
});

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  cleanup();
});

describe('test render pokemon data & catch pokemon', () => {
  test('render pokemon data', () => {
    render(
      <ThemeProvider theme={theme}>
        <MyPokemonProvider>
          <PokemonPage pokemon={pokemon} />
        </MyPokemonProvider>
      </ThemeProvider>
    );

    expect(screen.getByText('#10')).toBeInTheDocument;
    expect(screen.getByText('caterpie')).toBeInTheDocument;
    expect(screen.getByAltText('caterpie sprite')).toBeInTheDocument;
    expect(screen.getByText('bug')).toBeInTheDocument;
    expect(screen.getByText('tackle')).toBeInTheDocument;
    expect(screen.getByText('level-up')).toBeInTheDocument;
  });

  test('catch pokemon and failed', async () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.6;
    global.Math = mockMath;
    localStorage.setItem('mypokemon', JSON.stringify(localPokemon));
    const user = userEvent.setup({ delay: null });

    render(
      <ThemeProvider theme={theme}>
        <MyPokemonProvider>
          <PokemonPage pokemon={pokemon} />
        </MyPokemonProvider>
      </ThemeProvider>
    );

    const catchBtn = screen.getByAltText('catch');
    expect(catchBtn).toBeInTheDocument;
    await user.click(catchBtn);
    expect(screen.getByAltText('pokeball capturing')).toBeInTheDocument;
    act(() => jest.runAllTimers());
    await waitFor(
      () => expect(screen.getByText('Pokemonnya kabur!')).toBeInTheDocument
    );
  });

  test('catch pokemon and success', async () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.4;
    global.Math = mockMath;
    localStorage.setItem('mypokemon', JSON.stringify(localPokemon));
    const user = userEvent.setup({ delay: null });

    render(
      <ThemeProvider theme={theme}>
        <MyPokemonProvider>
          <PokemonPage pokemon={pokemon} />
        </MyPokemonProvider>
      </ThemeProvider>
    );

    const catchBtn = screen.getByAltText('catch');
    expect(catchBtn).toBeInTheDocument;
    await user.click(catchBtn);
    expect(screen.getByAltText('pokeball capturing')).toBeInTheDocument;
    act(() => jest.runAllTimers());
    await waitFor(() => expect(screen.getByText('Gotcha!!')).toBeInTheDocument);
    await user.click(screen.getByText('Simpan'));
    expect(screen.queryByText('Gotcha!!')).toBeNull();
  });
});
