import { screen, render } from '@testing-library/react';
import React from 'react';
import Skeleton from './index';

test('render skeleton div', () => {
  render(<Skeleton w="200px" h="16px" data-testid="skeleton" />);
  expect(screen.getByTestId('skeleton')).toBeInTheDocument;
});
