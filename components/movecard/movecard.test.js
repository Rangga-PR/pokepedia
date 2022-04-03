import { screen, render, cleanup } from '@testing-library/react';
import React from 'react';
import MoveCard from './index';
import MoveCardSkeleton from './skeleton';
import { ThemeProvider } from '@emotion/react';
import theme from '../../styles/theme';

afterEach(cleanup);

const move = {
  name: 'joget pedang',
  level: 20,
  method: 'tutor',
};

test('render skeleton', () => {
  render(<MoveCardSkeleton data-testid="move-skeleton" />);
  expect(screen.findByTestId('move-skeleton')).toBeInTheDocument;
});

test('render move data', () => {
  render(
    <ThemeProvider theme={theme}>
      <MoveCard data={move} idx={1} />
    </ThemeProvider>
  );
  expect(screen.getByText('1')).toBeInTheDocument;
  expect(screen.getByText('joget pedang')).toBeInTheDocument;
  expect(screen.getByText('20')).toBeInTheDocument;
  expect(screen.getByText('tutor')).toBeInTheDocument;
});
