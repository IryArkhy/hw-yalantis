import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import { getProduct } from '../../redux/products/productsOperations';

const ProductPage = () => {
  const product = useSelector(state => state.products.currentProduct);
  const params = useParams();
  const dispatch = useDispatch();
  const id = params.productId;

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  return (
    <Layout>
      <ProductInfo product={{ ...product }} />
    </Layout>
  );
};

export default ProductPage;
