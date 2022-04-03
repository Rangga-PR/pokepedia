import { screen, render } from '@testing-library/react';
import React from 'react';
import Pill from './index';
import { ThemeProvider } from '@emotion/react';
import theme from '../../../styles/theme';

test('render name', () => {
  render(
    <ThemeProvider theme={theme}>
      <Pill>test</Pill>
    </ThemeProvider>
  );
  expect(screen.getByText('test')).toBeInTheDocument;
});
