import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 3;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(500px - 32px);
  min-width: 240px;
  max-height: 500px;
  background-color: #fff;
  border-radius: 16px;
`;
