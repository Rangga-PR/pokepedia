import React from 'react';
import { Container } from './style';
import Skeleton from '../common/skeleton';

const PokemonHeroSkeleton = (props) => {
  return (
    <Container p="0" {...props}>
      <Skeleton w="100%" h="100%" />
    </Container>
  );
};

export default PokemonHeroSkeleton;
