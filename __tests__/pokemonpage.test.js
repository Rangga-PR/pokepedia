import 'cross-fetch/polyfill';
import { screen, render, cleanup, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@emotion/react';
import { MyPokemonProvider } from '../context/mypokemon';
import { MockedProvider } from '@apollo/client/testing';
import { createMockRouter } from '../test-utils';
import { GET_POKEMON } from '../queries';
import { RouterContext } from 'next/dist/shared/lib/router-context';
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

const mocks = [
  {
    request: {
      query: GET_POKEMON,
      variables: { name: 'bulbasaur' },
    },
    result: {
      data: {
        pokemon: {
          id: 1,
          name: 'bulbasaur',
          sprites: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          },
          moves: [
            {
              move: {
                name: 'razor-wind',
              },
              version_group_details: [
                {
                  level_learned_at: 0,
                  move_learn_method: {
                    name: 'egg',
                  },
                },
              ],
            },
          ],
          types: [
            {
              type: {
                name: 'grass',
              },
            },
          ],
        },
      },
    },
  },
];

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

jest.mock('next/link', () => {
  return ({ children }) => {
    return children;
  };
});

describe('test render pokemon data & catch pokemon', () => {
  test('render pokemon data', async () => {
    const router = createMockRouter({
      query: { slug: 'bulbasaur' },
    });
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <RouterContext.Provider value={router}>
          <ThemeProvider theme={theme}>
            <MyPokemonProvider>
              <PokemonPage />
            </MyPokemonProvider>
          </ThemeProvider>
        </RouterContext.Provider>
      </MockedProvider>
    );
    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => {
      expect(screen.getByText('#1')).toBeInTheDocument;
      expect(screen.getByText('bulbasaur')).toBeInTheDocument;
      expect(screen.getByAltText('bulbasaur sprite')).toBeInTheDocument;
      expect(screen.getByText('grass')).toBeInTheDocument;
      expect(screen.getByText('razor-wind')).toBeInTheDocument;
      expect(screen.getByText('egg')).toBeInTheDocument;
    });
  });

  test('catch pokemon and failed', async () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.6;
    global.Math = mockMath;
    localStorage.setItem('mypokemon', JSON.stringify(localPokemon));
    const user = userEvent.setup({ delay: null });
    const router = createMockRouter({
      query: { slug: 'bulbasaur' },
    });

    render(
      <RouterContext.Provider value={router}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <ThemeProvider theme={theme}>
            <MyPokemonProvider>
              <PokemonPage />
            </MyPokemonProvider>
          </ThemeProvider>
        </MockedProvider>
      </RouterContext.Provider>
    );

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(async () => {
      const catchBtn = screen.getByAltText('catch');
      expect(catchBtn).toBeInTheDocument;
      await user.click(catchBtn);
      expect(screen.getByAltText('pokeball capturing')).toBeInTheDocument;
    });
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
    const router = createMockRouter({
      query: { slug: 'bulbasaur' },
    });

    render(
      <RouterContext.Provider value={router}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <ThemeProvider theme={theme}>
            <MyPokemonProvider>
              <PokemonPage />
            </MyPokemonProvider>
          </ThemeProvider>
        </MockedProvider>
      </RouterContext.Provider>
    );

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(async () => {
      const catchBtn = screen.getByAltText('catch');
      expect(catchBtn).toBeInTheDocument;
      await user.click(catchBtn);
      expect(screen.getByAltText('pokeball capturing')).toBeInTheDocument;
    });
    act(() => jest.runAllTimers());
    await waitFor(() => expect(screen.getByText('Gotcha!!')).toBeInTheDocument);
  });
});
