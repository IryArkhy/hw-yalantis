import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import T from 'prop-types';
import { ShopContext } from '../../hoc/withContext';
import styles from './product-info.module.css';
import 'react-toastify/dist/ReactToastify.css';
import useRouter from '../../hooks/useRouter';

const ProductInfo = ({ product }) => {
  const { actions } = useContext(ShopContext);
  const { addProductToCart } = actions;
  const { history } = useRouter();
  const { name, origin, price, id } = product;

  const addToCartAndNotify = () => {
    addProductToCart(id);
    toast.success('🎉 The product is in your shopping list!!', {
      position: 'top-left',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

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
        <button type="button" onClick={returnToPreviusPage}>
          Go Back
        </button>
        <button type="button" onClick={addToCartAndNotify}>
          Add to Cart
        </button>
        <ToastContainer />
      </div>
    </section>
  );
};

ProductInfo.propTypes = {
  product: T.shape({
    id: T.string.isRequired,
    name: T.string.isRequired,
    origin: T.string.isRequired,
    price: T.number.isRequired,
  }).isRequired,
};
export default ProductInfo;
