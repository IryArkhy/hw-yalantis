import React from 'react';
import T from 'prop-types';

const ControlPanelBtn = ({ onClickCallback, styles, text }) => {
  return (
    <button className={styles} type="button" onClick={onClickCallback}>
      {text}
    </button>
  );
};
ControlPanelBtn.defaultProps = {
  styles: '',
};

ControlPanelBtn.propTypes = {
  onClickCallback: T.func.isRequired,
  styles: T.string,
  text: T.string.isRequired,
};

export default ControlPanelBtn;
