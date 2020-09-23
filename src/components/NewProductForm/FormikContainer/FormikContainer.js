import React from 'react';
import { Formik } from 'formik';
import T from 'prop-types';
import { useHistory } from 'react-router-dom';
import schema from '../yup/validationSchema';
import NewProductForm from '../NewProductForm';
import useProducts from '../../../hooks/useProducts';
import routes from '../../../routes';

// TODO: close modal on submit of create product --> redirect to user's products page

const FormikWraper = ({ initialValues, productId, onModalClose }) => {
  const history = useHistory();
  const { postProduct, updateProduct } = useProducts();
  const { name, origin } = initialValues;
  const handleSubmit = values => {
    if (name === '' && origin === '') {
      postProduct(values);
    } else {
      updateProduct({ ...values, id: productId });
    }
    onModalClose();
    history.push(routes.PROFILE_PAGE_PODUCTS);
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
    price: T.oneOfType([T.number, T.string]).isRequired,
    origin: T.string.isRequired,
  }).isRequired,
  productId: T.string,
  onModalClose: T.func.isRequired,
};

export default FormikWraper;
