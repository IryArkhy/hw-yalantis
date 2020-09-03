import React from 'react';
import T from 'prop-types';
import styles from './form-control.module.css';
import { ControlPanelBtn } from '../../Buttons';

const FormControl = ({ handleReset, isSubmitting }) => {
  return (
    <div className={styles.formControls}>
      <ControlPanelBtn
        onClickCallback={handleReset}
        disabled={isSubmitting}
        text="Reset"
        type="reset"
        styles={styles.reset}
      />
      <ControlPanelBtn
        disabled={isSubmitting}
        text="Submit"
        type="submit"
        styles={styles.submit}
      />
    </div>
  );
};

FormControl.propTypes = {
  handleReset: T.func.isRequired,
  isSubmitting: T.bool.isRequired,
};
export default FormControl;
