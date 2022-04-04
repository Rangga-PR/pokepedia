import { screen, render } from '@testing-library/react';
import React from 'react';
import Button from '.';
import { ThemeProvider } from '@emotion/react';
import theme from '../../../styles/theme';
import userEvent from '@testing-library/user-event';

test('render button and can be clicked', async () => {
  const user = userEvent.setup();
  const handleClick = jest.fn();
  render(
    <ThemeProvider theme={theme}>
      <Button onClick={handleClick}>test</Button>
    </ThemeProvider>
  );

  const btn = screen.getByText('test');
  expect(btn).toBeInTheDocument;
  await user.click(btn);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
