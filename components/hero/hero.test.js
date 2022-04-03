import { screen, render } from '@testing-library/react';
import React from 'react';
import Hero from './index';
import { ThemeProvider } from '@emotion/react';
import theme from '../../styles/theme';

test('render pokeball img and text', () => {
  render(
    <ThemeProvider theme={theme}>
      <Hero />
    </ThemeProvider>
  );
  expect(screen.getByText('Pokepedia')).toBeInTheDocument;
  expect(screen.getByText('Temukan pokemon favoritmu')).toBeInTheDocument;
  expect(screen.getByAltText('pokeball')).toBeInTheDocument;
});
