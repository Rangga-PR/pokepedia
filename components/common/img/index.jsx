import styled from '@emotion/styled';

export default styled.img`
  display: block;
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  margin: ${({ m }) => m};
  padding: ${({ p }) => p};
  filter: ${({ f }) => f};
  cursor: ${({ c }) => c};
`;
