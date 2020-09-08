import React from 'react';
import T from 'prop-types';
import { ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import styles from './product-info.module.css';
import CustomBtn from '../Buttons/CustomButton';
import useCart from '../../hooks/useCart';
import 'react-toastify/dist/ReactToastify.css';

const ProductInfo = ({ product }) => {
  const history = useHistory();
  const { addOneToCart } = useCart();
  const addProductToCart = () => addOneToCart(id);
  const { name, origin, price, id } = product;

  const returnToPreviusPage = () => history.goBack();

  return (
    <section className={styles.productSection}>
      <h3>{name}</h3>
      <div className={styles.productSection_descriptionWrapper}>
        <p>
          Origin: <span>{origin}</span>
        </p>
        <p>
          Price: <span>{price}$</span>
        </p>
      </div>
      <div className={styles.productSection_buttonsWrapper}>
        <CustomBtn actionCallback={returnToPreviusPage} text="Go Back" />
        <CustomBtn actionCallback={addProductToCart} text="Add To Cart" />
        <ToastContainer />
      </div>
    </section>
  );
};

ProductInfo.propTypes = {
  product: T.shape({
    id: T.string,
    name: T.string,
    origin: T.string,
    price: T.number,
  }).isRequired,
};
export default ProductInfo;
