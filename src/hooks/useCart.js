import { useSelector, useDispatch } from 'react-redux';
import { getCart } from '../redux/selectors/selectors';
import cartActions from '../redux/cart/cartActions';
import ordersActions from '../redux/orders/ordersActions';

const useCart = () => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const addOneToCart = productId =>
    dispatch(cartActions.addToCart(productId, cart));

  const removeOneFromCart = productId =>
    dispatch(cartActions.deletProductFromCart(productId, cart));

  const removeAllFromCart = productId =>
    dispatch(cartActions.removeAllInstances(productId));

  const emptyCart = () => dispatch(cartActions.clearCart());
  const createOrder = () => dispatch(ordersActions.createOrder());

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
