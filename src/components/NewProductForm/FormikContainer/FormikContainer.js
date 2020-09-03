import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import styles from '../productForm.module.css';
import { createProduct } from '../../../redux/products/productsOperations';
import schema from '../yup/validationSchema';
import NewProductForm from '../NewProductForm';

const FormikWraper = () => {
  const initialValues = {
    name: '',
    price: '',
    origin: '',
  };
  const dispatch = useDispatch();
  const handleSubmit = values => {
    dispatch(createProduct(values));
  };
  return (
    <div className={styles.formWraper}>
      <h2>Add your product</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        component={NewProductForm}
      />
    </div>
  );
};

export default FormikWraper;
