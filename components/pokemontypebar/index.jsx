import React from 'react';
import Pill from '../common/pill';
import Flexbox from '../common/flexbox';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import Skeleton from '../common/skeleton';

const PokemonTypeBar = ({ types, loading }) => {
  const theme = useTheme();

  return (
    <Flexbox p="8px 16px" bs="inset 0px -0.5px 0px #d9d9d9">
      {loading
        ? [1, 2].map((v) => (
            <Skeleton
              w="50px"
              h="26px"
              br="16px"
              key={v}
              m="0 8px 0 0"
              data-testid="type-loading"
            />
          ))
        : types.map((t) => (
            <Pill key={t} m="0 8px 0 0" bg={theme.color[t]}>
              {t}
            </Pill>
          ))}
    </Flexbox>
  );
};

PokemonTypeBar.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool,
};

export default PokemonTypeBar;
