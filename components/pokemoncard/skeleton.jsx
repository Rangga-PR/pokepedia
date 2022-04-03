import React from 'react';
import { CardContainer } from './style';
import Img from '../common/img';
import Typo from '../common/typo';
import Flexbox from '../common/flexbox';
import Skeleton from '../common/skeleton';

const PokemonCardSkeleton = (props) => {
  return (
    <CardContainer {...props}>
      <Skeleton w="40%" h="19px" br="8px" />
      <Skeleton w="100%" h="32px" br="8px" m="8px 0" />
      <Skeleton w="25%" h="16px" br="8px" />
    </CardContainer>
  );
};

export default PokemonCardSkeleton;
