import { screen, render, cleanup } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '.';
import { ThemeProvider } from '@emotion/react';
import theme from '../../styles/theme';

beforeAll(() => {
  ReactDOM.createPortal = jest.fn((element, node) => {
    return element;
  });
});

afterEach(() => {
  ReactDOM.createPortal.mockClear();
});

test('render modal with content', () => {
  render(
    <ThemeProvider theme={theme}>
      <Modal isOpen={true} setIsOpen={jest.fn()}>
        test
      </Modal>
    </ThemeProvider>
  );

  expect(screen.getByText('test')).toBeInTheDocument;
});
