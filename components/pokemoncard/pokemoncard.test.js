import { screen, render } from '@testing-library/react';
import React from 'react';
import PokemonCard from './index';
import PokemonCardSkeleton from './skeleton';
import { ThemeProvider } from '@emotion/react';
import theme from '../../styles/theme';

const pokemon = {
  id: 123,
  name: 'agumon',
  artwork: 'https://raw.github.com/agumon.png',
};

test('render skeleton', () => {
  render(
    <ThemeProvider theme={theme}>
      <PokemonCardSkeleton data-testid="card-skeleton" />
    </ThemeProvider>
  );
  expect(screen.getByTestId('card-skeleton')).toBeInTheDocument;
});

test('render caught pokemon data', () => {
  render(
    <ThemeProvider theme={theme}>
      <PokemonCard data={pokemon} caught={1} />
    </ThemeProvider>
  );
  expect(screen.getByText('#123')).toBeInTheDocument;
  expect(screen.getByText('agumon')).toBeInTheDocument;
  expect(screen.getByAltText('pokeball')).toBeInTheDocument;
  expect(screen.getByText('1')).toBeInTheDocument;
});

test('render uncaught pokemon data', () => {
  render(
    <ThemeProvider theme={theme}>
      <PokemonCard data={pokemon} caught={0} />
    </ThemeProvider>
  );
  expect(screen.getByText('#123')).toBeInTheDocument;
  expect(screen.getByText('agumon')).toBeInTheDocument;
  expect(screen.queryByAltText('pokeball')).toBeNull();
  expect(screen.queryByText('1')).toBeNull();
});
