import React from 'react';
import T from 'prop-types';
import styles from './buttons.module.css';

const LoadProducts = ({ actionCallback, isDisabled }) => {
  return (
    <button
      className={styles.loadProducts}
      type="button"
      onClick={actionCallback}
      disabled={isDisabled}
    >
      Load
    </button>
  );
};

LoadProducts.defaultProps = {
  isDisabled: false,
};

LoadProducts.propTypes = {
  actionCallback: T.func.isRequired,
  isDisabled: T.bool,
};

export default LoadProducts;
