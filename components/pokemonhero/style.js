import styled from '@emotion/styled';
import Img from '../common/img';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-inline: 16px;
  width: 100%;
  aspect-ratio: 2 / 1;
  background-color: ${({ bg }) => bg};
  background-image: url('/assets/svg/pokeball_fill.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
