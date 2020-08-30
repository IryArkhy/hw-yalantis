import React from 'react';
import T from 'prop-types';
import styles from './buttons.module.css';

const CustomBtn = ({ actionCallback, text, isDisabled }) => {
  return (
    <button
      className={styles.customBtn}
      type="button"
      onClick={actionCallback}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

CustomBtn.defaultProps = {
  isDisabled: false,
};

CustomBtn.propTypes = {
  actionCallback: T.func.isRequired,
  text: T.string.isRequired,
  isDisabled: T.bool,
};

export default CustomBtn;
