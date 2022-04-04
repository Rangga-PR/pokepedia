import { screen, render, cleanup } from '@testing-library/react';
import React from 'react';
import CatchPokemon from '.';
import CatchLoading from './loading';
import CatchSuccess from './success';
import CatchFailed from './failed';
import { ThemeProvider } from '@emotion/react';
import theme from '../../styles/theme';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom';

beforeAll(() => {
  ReactDOM.createPortal = jest.fn((element, node) => {
    return element;
  });
});

afterEach(() => {
  ReactDOM.createPortal.mockClear();
  cleanup();
});

const pokemon = {
  id: 1,
  name: 'bulbasaur',
  sprites: 'https://raw.github.com/sprites/bulbasaur',
};

test('render catch in progress state', () => {
  render(
    <ThemeProvider theme={theme}>
      <CatchLoading />
    </ThemeProvider>
  );

  expect(screen.getByAltText('pokeball capturing')).toBeInTheDocument;
});

test('render catch failed state', () => {
  render(
    <ThemeProvider theme={theme}>
      <CatchFailed />
    </ThemeProvider>
  );

  expect(screen.getByText('Pokemonnya kabur!')).toBeInTheDocument;
});

test('render catch success state', async () => {
  const user = userEvent.setup();
  const handleSave = jest.fn();

  render(
    <ThemeProvider theme={theme}>
      <CatchSuccess pokemon={pokemon} onSave={handleSave} />
    </ThemeProvider>
  );

  expect(screen.getByText('Gotcha!!')).toBeInTheDocument;
  expect(screen.getByDisplayValue('bulbasaur')).toBeInTheDocument;
  await user.click(screen.getByRole('button'));
  expect(handleSave).toHaveBeenCalledTimes(1);
});

test('test catch pokemon', async () => {
  const user = userEvent.setup();
  render(
    <ThemeProvider theme={theme}>
      <CatchPokemon pokemon={pokemon} />
    </ThemeProvider>
  );

  const catchBtn = screen.getByAltText('catch');

  expect(catchBtn).toBeInTheDocument;
  await user.click(catchBtn);
  expect(screen.getByAltText('pokeball capturing')).toBeInTheDocument;
});
