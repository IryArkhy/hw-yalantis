import { useSelector, useDispatch } from 'react-redux';
import {
  addProductToCart,
  removeProductFromCart,
  removeAllInstancesOfProduct,
  clearCart,
} from '../redux/cart/cartOperations';
import { getCart } from '../redux/selectors/selectors';
import { postOrder } from '../redux/orders/ordersOperations';

const useCart = () => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const addOneToCart = productId => dispatch(addProductToCart(productId));

  const removeOneFromCart = productId =>
    dispatch(removeProductFromCart(productId));

  const removeAllFromCart = productId =>
    dispatch(removeAllInstancesOfProduct(productId));

  const emptyCart = () => dispatch(clearCart());
  const createOrder = () => dispatch(postOrder());

  const totalPrice = cart.reduce((acc, { price, count }) => {
    acc += price * count;
    return acc;
  }, 0);

  return {
    cart,
    addOneToCart,
    removeOneFromCart,
    removeAllFromCart,
    createOrder,
    emptyCart,
    totalPrice,
  };
};

export default useCart;
