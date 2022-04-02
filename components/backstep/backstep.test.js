import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../../test-utils';
import React from 'react';
import Backstep from './index';

test('render back button', () => {
  render(<Backstep />);
  expect(screen.getByAltText('back')).toBeInTheDocument;
});

test('router back is called on click', async () => {
  const router = createMockRouter({});
  const user = userEvent.setup();
  render(
    <RouterContext.Provider value={router}>
      <Backstep />
    </RouterContext.Provider>
  );
  await user.click(screen.getByAltText('back'));
  expect(router.back).toHaveBeenCalledTimes(1);
});
