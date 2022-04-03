import { screen, render } from '@testing-library/react';
import React from 'react';
import PokemonHero from '.';
import { ThemeProvider } from '@emotion/react';
import theme from '../../styles/theme';

test('render pokemon data', () => {
  render(
    <ThemeProvider theme={theme}>
      <PokemonHero
        id={123}
        name="bulbasaur"
        img="/assets/svg/pokeball_fill.svg"
      />
    </ThemeProvider>
  );
  expect(screen.getByText('bulbasaur')).toBeInTheDocument;
  expect(screen.getByText('#123')).toBeInTheDocument;
  expect(screen.getByAltText('bulbasaur sprite')).toBeInTheDocument;
});
