import React from 'react';
import { IconContainer } from './style';
import Img from '../common/img';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Navicon = ({ src, href, ...props }) => {
  return (
    <Link href={href} passHref>
      <IconContainer role="link">
        <Img src={src} w="21px" h="21px" {...props} />
      </IconContainer>
    </Link>
  );
};

Navicon.propTypes = {
  src: PropTypes.string,
  href: PropTypes.string,
};

export default Navicon;
