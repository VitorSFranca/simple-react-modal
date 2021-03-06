import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({
  open,
  closeModal,
  closeOnEsc,
  closeOnClickOutside,
  modalClassName,
  modalStyle,
  backgroundClassName,
  backgroundStyle,
  hasBackground,
  children
}) => {
  const modalRef = React.useRef(null);
  const handleCloseModal = typeof closeModal === 'function' ? closeModal : () => {};
  const modalClassNameWrapper = modalClassName || 'simple-react-modal';
  const backgroundClassNameWrapper = backgroundClassName || 'simple-react-modal-background';
  useEffect(() => {
    const bindEscClick = e => {
      if (e.keyCode === 27) handleCloseModal();
    };

    const bindClickOutside = e => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleCloseModal();
      }
    };

    if (open && window) {
      if (closeOnEsc) window.addEventListener('keydown', bindEscClick);
      if (closeOnClickOutside) window.addEventListener('mousedown', bindClickOutside);
    } else if (window) {
      if (closeOnEsc) window.removeEventListener('keydown', bindEscClick);
      if (closeOnClickOutside) window.removeEventListener('mousedown', bindClickOutside);
    }
  }, [closeOnClickOutside, closeOnEsc, handleCloseModal, open]);

  const renderBackground = () => hasBackground ? React.createElement("div", {
    className: backgroundClassNameWrapper,
    style: backgroundStyle
  }) : null;

  if (open) {
    return React.createElement(React.Fragment, null, renderBackground(), React.createElement("div", {
      className: modalClassNameWrapper,
      style: modalStyle,
      ref: modalRef
    }, children));
  }

  return null;
};

Modal.defaultProps = {
  modalClassName: '',
  modalStyle: {},
  backgroundClassName: '',
  backgroundStyle: {},
  hasBackground: true,
  closeOnEsc: true,
  closeOnClickOutside: true
};
Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalClassName: PropTypes.string,
  modalStyle: PropTypes.object,
  backgroundClassName: PropTypes.string,
  backgroundStyle: PropTypes.object,
  hasBackground: PropTypes.bool,
  closeOnEsc: PropTypes.bool,
  closeOnClickOutside: PropTypes.bool
};
export default Modal;