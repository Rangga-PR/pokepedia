import styled from '@emotion/styled';

export default styled.input`
  font-size: 16px;
  margin: ${({ m }) => m};
  width: ${({ w }) => w};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray};
  outline: none;
`;
