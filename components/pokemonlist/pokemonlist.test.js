import { screen, render } from '@testing-library/react';
import React from 'react';
import Pokemonlist from '.';
import { ThemeProvider } from '@emotion/react';
import theme from '../../styles/theme';

const pokemons = [
  {
    id: 123,
    name: 'agumon',
    artwork: 'https://raw.github.com/agumon.png',
  },
];

test('render pokemon list', () => {
  render(
    <ThemeProvider theme={theme}>
      <Pokemonlist data={pokemons} />
    </ThemeProvider>
  );
  expect(screen.getByText('agumon')).toBeInTheDocument;
});

test('render pokemon list loading skeleton', () => {
  render(
    <ThemeProvider theme={theme}>
      <Pokemonlist data={[]} loading={true} />
    </ThemeProvider>
  );
  expect(
    screen.getAllByTestId('pokemon-loading').length
  ).toBeGreaterThanOrEqual(1);
});

test('render both pokemon list & loading skeleton', () => {
  render(
    <ThemeProvider theme={theme}>
      <Pokemonlist data={pokemons} loading={true} />
    </ThemeProvider>
  );
  expect(screen.getByText('agumon')).toBeInTheDocument;
  expect(
    screen.getAllByTestId('pokemon-loading').length
  ).toBeGreaterThanOrEqual(1);
});
