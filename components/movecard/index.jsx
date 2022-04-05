import React from 'react';
import { CardContainer, CardNumberContainer } from './style';
import PropTypes from 'prop-types';
import Section from './section';

const MoveCard = ({ idx, data, color, ...props }) => {
  return (
    <CardContainer {...props}>
      <CardNumberContainer bg={color}>{idx}</CardNumberContainer>
      <Section color={color} title="Name" value={data.name} w="50%" />
      <Section color={color} title="Level" value={data.level} w="20%" />
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
  }),
  color: PropTypes.string,
};

export default MoveCard;
