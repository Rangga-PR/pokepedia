import React from 'react';
import { CardContainer } from './style';
import Flexbox from '../common/flexbox';
import Skeleton from '../common/skeleton';

const MoveCardSkeleton = (props) => {
  return (
    <CardContainer {...props}>
      <Skeleton w="28px" h="28px" br="100%" m="0 16px 0 0" />
      <Flexbox dir="column" m="0 16px 0 0" {...props} fg="1">
        <Skeleton w="100%" h="14px" m="4px 0" br="8px" />
        <Skeleton w="100%" h="14px" br="8px" />
      </Flexbox>
    </CardContainer>
  );
};

export default MoveCardSkeleton;
