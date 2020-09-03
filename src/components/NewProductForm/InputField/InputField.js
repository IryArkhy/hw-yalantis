import React from 'react';
import { ErrorMessage, Field } from 'formik';
import T from 'prop-types';

const InputField = ({
  value,
  type,
  placeholder,
  name,
  handleChange,
  isSubmitting,
  errorStyles,
  inputStyles,
}) => {
  return (
    <>
      <div className={errorStyles}>
        <ErrorMessage className={errorStyles} name="name" />
      </div>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete="on"
        validate
        value={value}
        onChange={handleChange}
        disabled={isSubmitting}
        className={inputStyles}
      />
    </>
  );
};

InputField.propTypes = {
  value: T.oneOfType([T.string, T.number]).isRequired,
  type: T.string.isRequired,
  placeholder: T.string.isRequired,
  name: T.string.isRequired,
  handleChange: T.func.isRequired,
  isSubmitting: T.bool.isRequired,
  errorStyles: T.string.isRequired,
  inputStyles: T.string.isRequired,
};

export default InputField;
