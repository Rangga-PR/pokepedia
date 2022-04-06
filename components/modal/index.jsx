import React from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ContentContainer } from './style';
import PropTypes from 'prop-types';
import Flexbox from '../common/flexbox';
import Img from '../common/img';

const Modal = ({ isOpen, setIsOpen, children }) => {
  return createPortal(
    <Overlay isOpen={isOpen}>
      <ContentContainer isOpen={isOpen}>
        <Flexbox jc="end" p="8px">
          <Img
            c="pointer"
            role="button"
            alt="close"
            aria-label="close"
            src="/assets/svg/close_circle_black.svg"
            w="21px"
            h="21px"
            onClick={() => setIsOpen(false)}
          />
        </Flexbox>
        {children}
      </ContentContainer>
    </Overlay>,
    document.getElementById('__next')
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
