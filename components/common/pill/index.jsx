import styled from '@emotion/styled';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: fit-content;
  min-width: 50px;
  padding-inline: 6px;
  padding-bottom: 2px;
  border: 1px solid #fff;
  background-color: ${({ bg, theme }) => bg || theme.color.red};
  border-radius: 16px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin: ${({ m }) => m};
`;
