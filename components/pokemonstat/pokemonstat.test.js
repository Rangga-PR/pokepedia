import { screen, render, cleanup } from '@testing-library/react';
import React from 'react';
import PokemonStat from '.';
import { ThemeProvider } from '@emotion/react';
import theme from '../../styles/theme';

afterEach(() => cleanup());

const stat = [
  {
    name: 'hp',
    stat: 30,
  },
  {
    name: 'attack',
    stat: 40,
  },
];

test('render stat ', () => {
  render(
    <ThemeProvider theme={theme}>
      <PokemonStat stat={stat} />
    </ThemeProvider>
  );
  expect(screen.getByText('hp')).toBeInTheDocument;
  expect(screen.getByText('30')).toBeInTheDocument;
  expect(screen.getByText('attack')).toBeInTheDocument;
  expect(screen.getByText('40')).toBeInTheDocument;
});

test('render stat ', () => {
  render(
    <ThemeProvider theme={theme}>
      <PokemonStat stat={stat} loading />
    </ThemeProvider>
  );
  expect(screen.getAllByTestId('stat-loading')).toBeInTheDocument;
});
