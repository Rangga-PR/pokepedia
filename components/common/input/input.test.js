import { screen, render, cleanup } from '@testing-library/react';
import React from 'react';
import Input from '.';
import { ThemeProvider } from '@emotion/react';
import theme from '../../../styles/theme';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

test('render input and value can be changed', async () => {
  const user = userEvent.setup();
  render(
    <ThemeProvider theme={theme}>
      <Input placeholder="test" />
    </ThemeProvider>
  );

  const input = screen.getByPlaceholderText('test');
  expect(input).toBeInTheDocument;
  await user.click(input);
  await user.keyboard('coba');
  expect(screen.getByDisplayValue('coba')).toBeInTheDocument;
});
