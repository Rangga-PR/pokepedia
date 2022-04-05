import React from 'react';
import { Container } from './style';
import PropTypes from 'prop-types';
import Img from '../common/img';
import Typo from '../common/typo';
import PokemonHeroSkeleton from './skeleton';

const PokemonHero = ({ img, bg, name, id, loading, ...props }) => {
  if (loading) return <PokemonHeroSkeleton />;
  return (
    <Container bg={bg} {...props}>
      <Typo fs="42px" fw="600" ta={'end'} c="#fff">
        {`#${id}`}
      </Typo>
      <Img src={img} w="150px" m="0 auto" alt={`${name} sprite`} />
      <Typo fs="42px" fw="600" c="#fff">
        {name}
      </Typo>
    </Container>
  );
};

PokemonHero.propTypes = {
  img: PropTypes.string,
  bg: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  loading: PropTypes.bool,
};

export default PokemonHero;
