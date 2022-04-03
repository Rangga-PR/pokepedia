import React from 'react';
import { CardContainer, CardNumberContainer } from './style';
import PropTypes from 'prop-types';
import Section from './section';

const MoveCard = ({ idx, data, color }) => {
  return (
    <CardContainer>
      <CardNumberContainer bg={color}>{idx}</CardNumberContainer>
      <Section color={color} title="Name" value={data.name} w="45%" />
      <Section color={color} title="Min Level" value={data.level} w="20%" />
      <Section color={color} title="Method" value={data.method} />
    </CardContainer>
  );
};

MoveCard.propTypes = {
  idx: PropTypes.number,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    method: PropTypes.string.isRequired,
  }).isRequired,
  color: PropTypes.string,
};

export default MoveCard;
