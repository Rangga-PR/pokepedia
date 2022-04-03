import { screen, render } from '@testing-library/react';
import React from 'react';
import PokemonTypeBar from '.';
import { ThemeProvider } from '@emotion/react';
import theme from '../../styles/theme';

test('render types', () => {
  render(
    <ThemeProvider theme={theme}>
      <PokemonTypeBar types={['normal']} />
    </ThemeProvider>
  );
  expect(screen.getByText('normal')).toBeInTheDocument;
  expect(screen.queryByTestId('type-loading')).toBeNull();
});

test('render loading skeleton', () => {
  render(
    <ThemeProvider theme={theme}>
      <PokemonTypeBar types={['normal', 'fire']} loading />
    </ThemeProvider>
  );
  expect(screen.findByTestId('type-loading')).toBeInTheDocument;
  expect(screen.queryByText('normal')).toBeNull();
});
