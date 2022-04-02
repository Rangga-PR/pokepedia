import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const loadingSkeleton = keyframes`
  0% {
    background-color: hsl(200, 20%, 90%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`;

export default styled.div`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  border-radius: ${({ br }) => br};
  margin: ${({ m }) => m};
  animation: ${loadingSkeleton} 1.2s infinite alternate;
`;
