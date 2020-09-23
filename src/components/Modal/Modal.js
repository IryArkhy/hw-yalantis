import React, { createRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import T from 'prop-types';
import styles from './modal.module.css';
import { MODAL_ROOT } from '../../constants';
import { CloseModal } from '../Buttons';

const Modal = ({ onClose, ModalDiscription, children }) => {
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
      <div className={styles.modalContentWrpr}>
        <div className={styles.modal_header}>
          <ModalDiscription />
          <CloseModal onClose={onClose} styles={styles.closeModalBtn} />
        </div>
        {children}
      </div>
    </div>,
    MODAL_ROOT,
  );
};

Modal.propTypes = {
  onClose: T.func.isRequired,
  ModalDiscription: T.func.isRequired,
  children: T.node.isRequired,
};
export default Modal;
