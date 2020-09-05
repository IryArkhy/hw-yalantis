import React from 'react';
import T from 'prop-types';
import { ToastContainer } from 'react-toastify';
import {
  productSection,
  productSectionDescriptionWrapper,
  productSectionButtonsWrapper,
} from './product-info.module.css';
import CustomBtn from '../Buttons/CustomButton';
import 'react-toastify/dist/ReactToastify.css';

const ProductInfo = ({ product, onAddToCart, onGoBack }) => {
  const { name, origin, price } = product;
  return (
    <section className={productSection}>
      <h3>{name}</h3>
      <div className={productSectionDescriptionWrapper}>
        <p>
          Origin: <span>{origin}</span>
        </p>
        <p>
          Price: <span>{price}$</span>
        </p>
      </div>
      <div className={productSectionButtonsWrapper}>
        <CustomBtn actionCallback={onGoBack} text="Go Back" />
        <CustomBtn actionCallback={onAddToCart} text="Add To Cart" />
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
  onAddToCart: T.func.isRequired,
  onGoBack: T.func.isRequired,
};
export default ProductInfo;
