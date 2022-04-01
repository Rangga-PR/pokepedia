import { screen, render } from '@testing-library/react';
import React from 'react';
import Typo from './index';

test('render text', () => {
  render(<Typo>test</Typo>);
  expect(screen.getByText('test')).toBeInTheDocument;
});
