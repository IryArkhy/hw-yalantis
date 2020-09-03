import React from 'react';
import T from 'prop-types';
import styles from './form-control.module.css';
import { ControlPanelBtn } from '../../Buttons';

const FormControl = ({ handleReset, isSubmitting }) => {
  return (
    <div>
      <ControlPanelBtn
        onClickCallback={handleReset}
        disabled={isSubmitting}
        text="Reset"
        type="reset"
      />
      <ControlPanelBtn disabled={isSubmitting} text="Submit" type="submit" />
    </div>
  );
};

FormControl.propTypes = {
  handleReset: T.func.isRequired,
  isSubmitting: T.bool.isRequired,
};
export default FormControl;
