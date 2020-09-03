import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../../redux/products/productsOperations';
import schema from '../yup/validationSchema';
import NewProductForm from '../NewProductForm';

const FormikWraper = () => {
  const initialValues = {
    name: '',
    price: 0,
    origin: '',
  };
  const dispatch = useDispatch();
  const handleSubmit = values => {
    dispatch(createProduct(values));
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        component={NewProductForm}
      />
    </>
  );
};

export default FormikWraper;
