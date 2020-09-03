import React from 'react';
import { Form } from 'formik';
import T from 'prop-types';
import styles from './productForm.module.css';
import InputField from './InputField/InputField';
import SelectField from './SelectField/SelectField';
import useFilters from '../../hooks/useFilters';
import FormControls from './FormControls/FormControls';

const NewProductForm = ({
  values,
  handleChange,
  handleReset,
  isSubmitting,
}) => {
  const { name, price } = values;
  const { origins } = useFilters();
  return (
    <Form className={styles.formWraper}>
      <InputField
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        handleChange={handleChange}
        isSubmitting={isSubmitting}
        errorStyles={styles.invalid}
        inputStyles={styles.input}
      />
      <InputField
        type="number"
        name="price"
        placeholder="Price"
        value={price}
        handleChange={handleChange}
        isSubmitting={isSubmitting}
        errorStyles={styles.invalid}
        inputStyles={styles.input}
      />
      <SelectField
        values={origins}
        name="origin"
        placeholder="Origin"
        disabled={isSubmitting}
        errorStyles={styles.invalid}
        selectStyles={styles.select}
      />
      <FormControls handleReset={handleReset} isSubmitting={isSubmitting} />
    </Form>
  );
};

NewProductForm.propTypes = {
  values: T.shape({
    name: T.string.isRequired,
    price: T.number.isRequired,
    origin: T.string.isRequired,
  }).isRequired,
  handleChange: T.func.isRequired,
  handleReset: T.func.isRequired,
  isSubmitting: T.bool.isRequired,
};

export default NewProductForm;
