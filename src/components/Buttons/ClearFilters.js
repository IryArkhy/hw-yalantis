import React from 'react';
import T from 'prop-types';
import styles from './buttons.module.css';

const ClearFilters = ({ actionCallback, isDisabled }) => {
  return (
    <button
      className={styles.clearFilters}
      type="button"
      onClick={actionCallback}
      disabled={isDisabled}
    >
      Reset
    </button>
  );
};

ClearFilters.defaultProps = {
  isDisabled: false,
};

ClearFilters.propTypes = {
  actionCallback: T.func.isRequired,
  isDisabled: T.bool,
};

export default ClearFilters;
