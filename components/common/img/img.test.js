import { screen, render } from '@testing-library/react';
import React from 'react';
import Img from './index';

test('render img', () => {
  render(<Img src="/assets/svg/back_arrow.svg" alt="test icon" />);
  expect(screen.getByAltText('test icon')).toBeInTheDocument;
});
