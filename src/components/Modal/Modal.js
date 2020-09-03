import React, { createRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import T from 'prop-types';
import styles from './modal.module.css';
import { MODAL_ROOT } from '../../constants';
import FormikContainer from '../NewProductForm/FormikContainer/FormikContainer';

const Modal = ({ onClose }) => {
  const backdropRef = createRef();

  const handleKeyPress = useCallback(
    e => {
      if (e.code !== 'Escape') return;
      onClose();
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  const handleBackdropClick = ({ target }) => {
    if (backdropRef.current && target !== backdropRef.current) return;
    onClose();
  };
  return createPortal(
    <div
      ref={backdropRef}
      role="presentation"
      onClick={handleBackdropClick}
      className={styles.overlay}
    >
      <FormikContainer onClose={onClose} />
      <button type="button" onClick={onClose}>
        Close
      </button>
    </div>,
    MODAL_ROOT,
  );
};

Modal.propTypes = {
  onClose: T.func.isRequired,
};
export default Modal;
