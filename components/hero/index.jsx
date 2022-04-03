import React from 'react';
import { HeroContainer } from './style';
import Typo from '../common/typo';
import Img from '../common/img';

const Hero = () => {
  return (
    <HeroContainer>
      <Img
        src="/assets/svg/pokeball_fill.svg"
        h="156px"
        f="invert(96%) sepia(61%) saturate(17%) hue-rotate(214deg) brightness(104%) contrast(100%)"
        alt="pokeball"
      />
      <Typo c="#fff" as="h1" m="-16px 0 0">
        Pokepedia
      </Typo>
      <Typo c="#fff" fs="14px">
        Temukan pokemon favoritmu
      </Typo>
    </HeroContainer>
  );
};

export default Hero;
