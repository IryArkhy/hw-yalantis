import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import useRouter from '../../hooks/useRouter';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import api from '../../servises/api';
import notifyError from '../../helpers/otherHelpers';
import { USER_MESSAGES } from '../../constants';

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const router = useRouter();
  const id = router.query.productId;
  useEffect(() => {
    api
      .getProductsByID(id)
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
