import { useSelector, useDispatch } from 'react-redux';
import {
  addProductToCart,
  removeProductFromCart,
  removeAllInstancesOfProduct,
  clearCart,
} from '../redux/cart/cartOperations';

const useCart = () => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const addOneToCart = productId => dispatch(addProductToCart(productId));

  const removeOneFromCart = productId =>
    dispatch(removeProductFromCart(productId));

  const removeAllFromCart = productId =>
    dispatch(removeAllInstancesOfProduct(productId));

  const emptyCart = () => dispatch(clearCart());
  const totalPrice = cart.reduce((acc, { price, count }) => {
    acc += price * count;
    return acc;
  }, 0);

  return {
    cart,
    addOneToCart,
    removeOneFromCart,
    removeAllFromCart,
    emptyCart,
    totalPrice,
  };
};

export default useCart;