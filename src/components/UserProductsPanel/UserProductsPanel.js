import React from 'react';
import Card from '../Card';
import useModal from '../../hooks/useModal';
import Modal from '../Modal';
import { UpdateProductModalDescr } from '../Modal/ModalDiscriptions';
import FormikContainer from '../NewProductForm/FormikContainer/FormikContainer';
import styles from './user-products-panel.module.css';
import useProducts from '../../hooks/useProducts';

// TODO: getUserProductsData from the store and map it. Add card component inside the productsContainer
const testData = {
  origin: 'usa',
  name: 'Test product',
  price: 100,
  id: 'id',
  isEditable: true,
};
const UserProductsPanel = () => {
  const { name, price, origin, id } = testData;
  const { deleteProductForever } = useProducts();
  const initialValues = {
    name,
    price,
    origin,
  };
  const { isShowing, toggle } = useModal();
  const deleteProduct = () => deleteProductForever(id);
  return (
    <>
      <div className={styles.productsContainer}>
        <Card
          {...testData}
          openModal={toggle}
          onDeleteProduct={deleteProduct}
        />
      </div>
      {isShowing && (
        <Modal onClose={toggle} ModalDiscription={UpdateProductModalDescr}>
          <FormikContainer initialValues={initialValues} productId={id} />
        </Modal>
      )}
    </>
  );
};
export default UserProductsPanel;
