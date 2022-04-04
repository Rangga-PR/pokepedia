import { screen, render } from '@testing-library/react';
import React from 'react';
import MyPokemonList from '.';
import { ThemeProvider } from '@emotion/react';
import theme from '../../styles/theme';

const pokemon = [
  {
    catch_id: 0,
    id: 123,
    name: 'bulbasaur',
    nickname: 'kobis',
    sprites: 'https://raw.github.com/kobis.png',
  },
];

test('render pokemon data', async () => {
  const handleRelease = jest.fn();
  render(
    <ThemeProvider theme={theme}>
      <MyPokemonList data={pokemon} onRelease={handleRelease} />
    </ThemeProvider>
  );
  expect(screen.findByText('kobis')).toBeInTheDocument;
});
