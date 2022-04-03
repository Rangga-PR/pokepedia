import React from 'react';
import { Container } from './style';
import Navicon from './Navicon';
import Flexbox from '../common/flexbox';
import Backstep from '../backstep';
import PropTypes from 'prop-types';

const Appbar = ({ bg, ...props }) => {
  return (
    <Container {...props} bg={bg}>
      <Flexbox fg="1">
        <Backstep />
      </Flexbox>
      <Navicon
        src="/assets/svg/backpack_black.svg"
        alt="backpack"
        href="/my-pokemon"
      />
      <Navicon src="/assets/svg/home_black.svg" alt="home" href="/" />
    </Container>
  );
};

Appbar.propTypes = {
  bg: PropTypes.string,
};

export default Appbar;
