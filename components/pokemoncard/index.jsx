import React from 'react';
import { CardContainer } from './style';
import Img from '../common/img';
import Typo from '../common/typo';
import Flexbox from '../common/flexbox';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import Link from 'next/link';

const PokemonCard = ({ data, caught, ...props }) => {
  const theme = useTheme();
  return (
    <Link href={`/pokemon/${data.name}`} passHref>
      <CardContainer {...props} img={data.artwork}>
        <Typo as="h3" fw="bold" c={theme.color.gray}>
          {`#${data.id}`}
        </Typo>
        <Typo as="h1" m="4px 0">
          {data.name}
        </Typo>
        {caught && (
          <Flexbox>
            <Img src="/assets/svg/pokeball_icon.svg" w="16px" alt="pokeball" />
            <Typo fw="bold" m="0 4px">
              {caught || 0}
            </Typo>
          </Flexbox>
        )}
      </CardContainer>
    </Link>
  );
};

PokemonCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    artwork: PropTypes.string.isRequired,
  }).isRequired,
  caught: PropTypes.number,
};

export default PokemonCard;
