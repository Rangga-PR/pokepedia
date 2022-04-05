import { screen, render, cleanup } from '@testing-library/react';
import React from 'react';
import PokemonTypeBar from '.';
import { ThemeProvider } from '@emotion/react';
import theme from '../../styles/theme';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

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

test('can share', async () => {
  const user = userEvent.setup();
  const handleShare = jest.fn();
  render(
    <ThemeProvider theme={theme}>
      <PokemonTypeBar types={['normal']} withShare handleShare={handleShare} />
    </ThemeProvider>
  );
  const shareButton = screen.queryByAltText('share');
  expect(shareButton).toBeInTheDocument;
  await user.click(shareButton);
  expect(handleShare).toHaveBeenCalledTimes(1);
});
