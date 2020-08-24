import React, { useContext } from 'react';
import T from 'prop-types';
import { ToastContainer } from 'react-toastify';
import { GoBackButton, AddToCartSecond } from '../Buttons/Buttons';
import { ShopContext } from '../../hoc/withContext';
import useRouter from '../../hooks/useRouter';
import { USER_MESSAGES } from '../../constants';
import styles from './product-info.module.css';
import { addToCartAndNotify } from '../../helpers/cartHelpers';
import 'react-toastify/dist/ReactToastify.css';

const ProductInfo = ({ product }) => {
  const { actions } = useContext(ShopContext);
  const { addProductToCart } = actions;
  const { history } = useRouter();
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
        <GoBackButton onGoBack={returnToPreviusPage} />
        <AddToCartSecond
          onAddToCart={() =>
            addToCartAndNotify(
              id,
              addProductToCart,
              USER_MESSAGES.ADD_TO_CART_SUCCESS,
            )
          }
        />
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
