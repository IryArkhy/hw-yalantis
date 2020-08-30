import React, { useContext } from 'react';
import T from 'prop-types';
import { ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { ShopContext } from '../../hoc/withContext';
import { USER_MESSAGES } from '../../constants';
import styles from './product-info.module.css';
import { addToCartAndNotify } from '../../helpers/cartHelpers';
import CustomBtn from '../Buttons/CustomButton';
import 'react-toastify/dist/ReactToastify.css';

const ProductInfo = ({ product }) => {
  const { actions } = useContext(ShopContext);
  const { addProductToCart } = actions;
  const history = useHistory();
  const { name, origin, price, id } = product;

  const returnToPreviusPage = () => history.goBack();
  const addToCart = () =>
    addToCartAndNotify(id, addProductToCart, USER_MESSAGES.ADD_TO_CART_SUCCESS);

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
        <CustomBtn actionCallback={addToCart} text="Add To Cart" />
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
