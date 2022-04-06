import React, { useContext } from 'react';

import PropTypes from 'prop-types';
import { Container } from './style';
import Typo from '../common/typo';
import Button from '../common/button';
import Img from '../common/img';

const MyPokemonCard = ({ data, onRelease }) => {
  return (
    <Container>
      <Img src={data?.sprites} />
      <Typo>{data?.nickname}</Typo>
      <Typo fs="12px" fw="600">{`(${data?.name})`}</Typo>
      <Button m="4px 0 0 0" w="100%" onClick={() => onRelease(data)}>
        Lepas
      </Button>
    </Container>
  );
};

MyPokemonCard.propTypes = {
  data: PropTypes.shape({
    catch_id: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    sprites: PropTypes.string.isRequired,
  }).isRequired,
  onRelease: PropTypes.func.isRequired,
};

export default MyPokemonCard;
