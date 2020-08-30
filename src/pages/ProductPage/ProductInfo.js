import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import api from '../../servises/api';
import { notifyError } from '../../helpers/userNotifiers';
import { USER_MESSAGES } from '../../constants';

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const id = params.productId;

  useEffect(() => {
    api
      .getProducts('get', `/${id}`)
      .then(({ data }) => {
        setProduct(data);
      })
      .catch(err =>
        notifyError(USER_MESSAGES.FIND_PRODUCT_BY_ID_REQUEST_ERROR),
      );
  }, [id]);
  return (
    <Layout>
      <ProductInfo product={{ ...product }} />
    </Layout>
  );
};

export default ProductPage;
