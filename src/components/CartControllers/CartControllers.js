import React from 'react';
import T from 'prop-types';
import {
  bottomSectionWrapper,
  postOrderBtn,
} from './cart-controllers.module.css';
import { CustomBtn, ControlPanelBtn } from '../Buttons';

const CartControllers = ({ onClearCart, onPostOrder, totalPrice }) => {
  return (
    <div className={bottomSectionWrapper}>
      <p>Total {totalPrice}$</p>
      <CustomBtn text="Clear Cart" actionCallback={onClearCart} />
      <ControlPanelBtn
        onClickCallback={onPostOrder}
        styles={postOrderBtn}
        text="Buy"
      />
    </div>
  );
};

CartControllers.propTypes = {
  onClearCart: T.func.isRequired,
  onPostOrder: T.func.isRequired,
  totalPrice: T.number.isRequired,
};

export default CartControllers;
