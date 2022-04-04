import { screen, render } from '@testing-library/react';
import React from 'react';
import MyPokemonCard from '.';
import { ThemeProvider } from '@emotion/react';
import theme from '../../styles/theme';
import userEvent from '@testing-library/user-event';

const pokemon = {
  catch_id: 0,
  id: 123,
  name: 'bulbasaur',
  nickname: 'kobis',
  sprites: 'https://raw.github.com/kobis.png',
};

test('render pokemon data and release pokemon', async () => {
  const user = userEvent.setup();
  const handleRelease = jest.fn();
  render(
    <ThemeProvider theme={theme}>
      <MyPokemonCard data={pokemon} onRelease={handleRelease} />
    </ThemeProvider>
  );
  expect(screen.findByText('kobis')).toBeInTheDocument;
  await user.click(screen.queryByRole('button'));
  expect(handleRelease).toHaveBeenCalledTimes(1);
});
