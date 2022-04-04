import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Img from '../common/img';

const capture = keyframes`
  0%,90% {
    transform: rotate(0deg) translatex(0);
  }
  20%,80%{
    transform: rotate(12deg) translatex(1px);
  }
  50%,100%{
    transform: rotate(-12deg) translatex(-2px);
  }
`;

export const CaptureIcon = styled(Img)`
  animation: ${capture} 1s alternate infinite ease-in-out;
`;

export const Wrapper = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: 0;
  right: calc((100vw - min(500px, 100vw)) / 2);
  z-index: 2;
  margin: 16px;
  padding: 8px;
  background: #fff;
  border-radius: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
