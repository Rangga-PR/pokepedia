import styled from '@emotion/styled';

export default styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  margin: ${({ m }) => m};
  padding: ${({ p }) => p || '6px'};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  border: none;
  border-radius: 16px;
  outline: none;
  background-color: ${({ secondary, theme }) =>
    secondary ? theme.color.gray : theme.color.red};
  transition: 200ms;

  :hover {
    transform: scale(0.95);
  }
`;
