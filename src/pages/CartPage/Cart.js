import React from 'react';
import Layout from '../../components/Layout';
import ShoppingList from '../../components/ShopingList';
import CartControllers from '../../components/CartControllers';
import useCart from '../../hooks/useCart';
import useOrders from '../../hooks/useOrders';
import { cartPageTitle } from './cartPage.module.css';

const CartPage = () => {
  const {
    cart,
    addOneToCart,
    removeOneFromCart,
    removeAllFromCart,
    emptyCart,
    totalPrice,
  } = useCart();
  const { postOrder } = useOrders();
  const postOrderAndClearCart = () => {
    postOrder();
    emptyCart();
  };
  return (
    <Layout>
      <h2 className={cartPageTitle}>Your shopping list</h2>
      <ShoppingList
        cart={cart}
        onAddProductToCart={addOneToCart}
        onRemoveOneFromCart={removeOneFromCart}
        onRemoveAllFromCart={removeAllFromCart}
      />
      {cart.length && (
        <CartControllers
          totalPrice={totalPrice}
          onPostOrder={postOrderAndClearCart}
          onClearCart={emptyCart}
        />
      )}
    </Layout>
  );
};

export default CartPage;
