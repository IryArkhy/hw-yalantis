import React, { useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import useCart from '../../hooks/useCart';
import { getProduct } from '../../redux/products/productsOperations';
import { getCurrentProduct } from '../../redux/selectors/selectors';

const ProductPage = () => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { addOneToCart } = useCart();
  const product = useSelector(getCurrentProduct);
  const id = params.productId;

  const addProductToCart = () => addOneToCart(id);
  const returnToPreviusPage = () => history.goBack();

  useEffect(
    useCallback(() => {
      dispatch(getProduct(id));
    }, [dispatch, id]),
    [dispatch, id],
  );
  return (
    <Layout>
      <ProductInfo
        product={{ ...product }}
        onAddToCart={addProductToCart}
        onGoBack={returnToPreviusPage}
      />
    </Layout>
  );
};

export default ProductPage;
