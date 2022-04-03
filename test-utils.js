import { NextRouter } from 'next/router';

export const createMockRouter = (router) => {
  return {
    basePath: '',
    query: {},
    route: '/',
    pathname: '/',
    asPath: '/',
    isFallback: false,
    back: jest.fn(),
    beforePopState: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    prefetch: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    ...router,
  };
};
