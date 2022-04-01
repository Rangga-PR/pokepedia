import styled from '@emotion/styled';

export default styled.p`
  font-family: ${({ ff }) => ff};
  font-size: ${({ fs }) => fs};
  font-weight: ${({ fw }) => fw};
  line-height: ${({ lh }) => lh};
  letter-spacing: ${({ ls }) => ls};
  color: ${({ c }) => c};
  text-align: ${({ ta }) => ta};
  margin: ${({ m }) => m || '0'};
  padding: ${({ p }) => p};
`;
