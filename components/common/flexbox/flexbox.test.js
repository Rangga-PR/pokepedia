import { screen, render } from '@testing-library/react';
import React from 'react';
import Flexbox from './index';

test('render children', () => {
  render(<Flexbox>test</Flexbox>);
  expect(screen.getByText('test')).toBeInTheDocument;
});
