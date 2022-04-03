import styled from '@emotion/styled';

export const HeroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 200px;
  padding: 0 16px 32px 16px;
  background: ${({ theme }) => theme.color.red};
  overflow: hidden;
  clip-path: ellipse(100% 100% at 50% 0);
`;
