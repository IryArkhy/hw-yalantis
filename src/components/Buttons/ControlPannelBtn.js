import React from 'react';
import T from 'prop-types';

const ControlPanelBtn = ({ onClickCallback, styles, text, type, disabled }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={styles}
      type={type}
      onClick={onClickCallback}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
ControlPanelBtn.defaultProps = {
  styles: '',
  onClickCallback: null,
  type: 'button',
  disabled: false,
};

ControlPanelBtn.propTypes = {
  onClickCallback: T.func,
  styles: T.string,
  text: T.string.isRequired,
  type: T.string,
  disabled: T.bool,
};

export default ControlPanelBtn;
