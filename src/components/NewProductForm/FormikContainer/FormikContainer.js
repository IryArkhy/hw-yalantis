import React from 'react';
import { Formik } from 'formik';
import T from 'prop-types';
import schema from '../yup/validationSchema';
import NewProductForm from '../NewProductForm';
import useProducts from '../../../hooks/useProducts';

// TODO: close modal on submit of create product --> redirect to user's products page
// TODO: close modal on submit of update product
const FormikWraper = ({ initialValues, productId }) => {
  const { postProduct, updateProduct } = useProducts();
  const { name, origin } = initialValues;
  const handleSubmit = values => {
    if (name === '' && origin === '') {
      postProduct(values);
    } else {
      updateProduct({ ...values, id: productId });
    }
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
FormikWraper.defaultProps = {
  productId: null,
};
FormikWraper.propTypes = {
  initialValues: T.shape({
    name: T.string.isRequired,
    price: T.number.isRequired,
    origin: T.string.isRequired,
  }).isRequired,
  productId: T.string,
};

export default FormikWraper;
