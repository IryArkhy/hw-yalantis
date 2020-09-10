import React, { useEffect, useCallback, useState } from 'react';
import ProductCard from '../Card';
import useModal from '../../hooks/useModal';
import Modal from '../Modal';
import { UpdateProductModalDescr } from '../Modal/ModalDiscriptions';
import FormikContainer from '../NewProductForm/FormikContainer/FormikContainer';
import styles from './user-products-panel.module.css';
import useProducts from '../../hooks/useProducts';

// TODO: getUserProductsData from the store and map it. Add card component inside the productsContainer

const UserProductsPanel = () => {
  const [currentProduct, setCurrentProduct] = useState({
    name: '',
    price: 0,
    origin: '',
    id: '',
  });
  const { userProducts, deleteProductForever } = useProducts();
  const { isShowing, toggle } = useModal();

  const handleGetProductData = ({ dataset }) => {
    const { product, id } = dataset;
    const [name, price, origin] = product.split('-');
    setCurrentProduct({
      name: name.trim(),
      price: Number(price),
      origin,
      id,
    });
  };

  const initialValues = {
    name: currentProduct.name,
    price: currentProduct.price,
    origin: currentProduct.origin,
  };
  const deleteProduct = () => deleteProductForever(currentProduct.id);
  return (
    <>
      <div className={styles.productsContainer}>
        {userProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            openModal={toggle}
            onDeleteProduct={deleteProduct}
            onGetProductData={handleGetProductData}
          />
        ))}
      </div>
      {isShowing && (
        <Modal onClose={toggle} ModalDiscription={UpdateProductModalDescr}>
          <FormikContainer
            initialValues={initialValues}
            productId={currentProduct.id}
            onModalClose={toggle}
          />
        </Modal>
      )}
    </>
  );
};
export default UserProductsPanel;
