import React from 'react';
import { ErrorMessage, Field } from 'formik';
import T from 'prop-types';

const SelectField = ({
  values,
  name,
  placeholder,
  disabled,
  errorStyles,
  selectStyles,
}) => {
  return (
    <>
      <div className={errorStyles}>
        <ErrorMessage className={errorStyles} name={name} />
      </div>
      <Field
        name={name}
        as="select"
        validate
        placeholder={placeholder}
        disabled={disabled}
        className={selectStyles}
      >
        <option value="">Origin</option>
        {values.map(({ value, displayName }) => (
          <option key={value} value={value}>
            {displayName}
          </option>
        ))}
      </Field>
    </>
  );
};

SelectField.propTypes = {
  values: T.arrayOf(
    T.shape({
      value: T.string.isRequired,
      displayName: T.string.isRequired,
    }),
  ).isRequired,
  name: T.string.isRequired,
  placeholder: T.string.isRequired,
  disabled: T.bool.isRequired,
  errorStyles: T.string.isRequired,
  selectStyles: T.string.isRequired,
};

export default SelectField;
