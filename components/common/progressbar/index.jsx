import React from 'react';
import PropTypes from 'prop-types';
import { Container, Bar } from './style';

const ProgressBar = ({ progress, color, ...props }) => {
  return (
    <Container {...props}>
      <Bar progress={progress} color={color} />
    </Container>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number,
  color: PropTypes.string,
};

export default ProgressBar;
