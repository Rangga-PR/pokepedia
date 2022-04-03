import styled from '@emotion/styled';

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  background: ${({ bg, theme }) => bg || theme.color.red};
  padding-inline: 16px;
`;

export const IconContainer = styled.div`
  cursor: pointer;
  background: #fff;
  border-radius: 100%;
  padding: 4px;
  margin-left: 12px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: 200ms ease-in-out;

  :hover {
    transform: scale(0.9);
  }
`;
