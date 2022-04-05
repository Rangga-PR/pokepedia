import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@emotion/react';
import { MyPokemonProvider } from '../context/mypokemon';
import theme from '../styles/theme';
import React from 'react';
import MyPokemonPage from '../pages/my-pokemon';

afterEach(() => cleanup());

const pokemons = [
  {
    catch_id: 1,
    id: 1,
    name: 'bulbasaur',
    nickname: 'kobis',
    sprites: 'https://raw.github.com/sprite/bulbasaur',
  },
];

describe('render pokemon collections and can release it', () => {
  localStorage.setItem('mypokemon', JSON.stringify(pokemons));
  const user = userEvent.setup();

  render(
    <ThemeProvider theme={theme}>
      <MyPokemonProvider>
        <MyPokemonPage />
      </MyPokemonProvider>
    </ThemeProvider>
  );

  test('render pokemon', () => {
    expect(screen.getByText('kobis')).toBeInTheDocument;
  });

  test('can release pokemon', async () => {
    const releaseBtn = screen.queryByRole('button');
    await user.click(releaseBtn);
    expect(screen.queryByText('kobis')).toBeNull();
  });
});
