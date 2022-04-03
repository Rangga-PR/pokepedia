import styled from '@emotion/styled';

export const CardContainer = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 142px;
  overflow: hidden;
  height: 104px;
  border-radius: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #fff;
  background-image: url(${({ img }) => img});
  background-position: calc(100% - 16px);
  background-repeat: no-repeat;
  background-size: contain;
  padding: 8px 16px;
  margin-top: 16px;
`;
