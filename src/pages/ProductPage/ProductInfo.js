import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import { getProduct } from '../../redux/products/productsOperations';
import { getCurrentProduct } from '../../redux/selectors/selectors';

const ProductPage = () => {
  const product = useSelector(getCurrentProduct);
  const params = useParams();
  const dispatch = useDispatch();
  const id = params.productId;

  useEffect(
    useCallback(() => {
      dispatch(getProduct(id));
    }, [dispatch, id]),
    [dispatch, id],
  );
  return (
    <Layout>
      <ProductInfo product={{ ...product }} />
    </Layout>
  );
};

export default ProductPage;
