import { screen, render } from '@testing-library/react';
import React from 'react';
import ProgressBar from '.';
import { ThemeProvider } from '@emotion/react';
import theme from '../../../styles/theme';

test('render progress bar', () => {
  render(
    <ThemeProvider theme={theme}>
      <ProgressBar progress={20} data-testid="progress-bar" />
    </ThemeProvider>
  );
  expect(screen.getByTestId('progress-bar')).toBeInTheDocument;
});
