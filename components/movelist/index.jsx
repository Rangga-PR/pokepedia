import React from 'react';
import Flexbox from '../common/flexbox';
import Typo from '../common/typo';
import MoveCard from '../movecard';
import MoveCardSkeleton from '../movecard/skeleton';
import PropTypes from 'prop-types';

const MoveList = ({ moves, color, loading, ...props }) => {
  return (
    <Flexbox dir="column" p="16px" {...props}>
      <Typo as="h2" m="0 0 16px 0">
        Moves
      </Typo>
      {loading
        ? [1, 2, 3].map((v) => (
            <MoveCardSkeleton key={v} data-testid="move-loading" />
          ))
        : moves.map((m, i) => (
            <MoveCard key={m.name} idx={i + 1} data={m} color={color} />
          ))}
    </Flexbox>
  );
};

MoveList.propTypes = {
  color: PropTypes.string,
  loading: PropTypes.bool,
  moves: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
      method: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoveList;
