import React from 'react';
import Typo from '../common/typo';
import Flexbox from '../common/flexbox';
import PropTypes from 'prop-types';

const Section = ({ color, title, value, ...props }) => {
  return (
    <Flexbox dir="column" m="0 16px 0 0" {...props}>
      <Typo fs="14px" c={color} fw="600">
        {title}
      </Typo>
      <Typo fs="14px">{value}</Typo>
    </Flexbox>
  );
};

Section.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Section;
