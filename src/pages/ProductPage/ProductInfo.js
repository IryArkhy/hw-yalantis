import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import useRouter from '../../hooks/useRouter';
import { ShopContext } from '../../hoc/withContext';
import { findProductById } from '../../helpers/cartHelpers';
import ProductInfo from '../../components/ProductInfo/ProductInfo';

const ProductPage = () => {
  const { products } = useContext(ShopContext);
  const router = useRouter();
  const id = router.query.productId;
  const product = findProductById(products, id);

  return (
    <Layout>
      <ProductInfo product={{ ...product }} />
    </Layout>
  );
};

export default ProductPage;
