import { useSelector, useDispatch } from 'react-redux';
import { getCart } from '../redux/selectors/selectors';
import CA from '../redux/cart/cartActions';
import OA from '../redux/orders/ordersActions';

const useCart = () => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const addOneToCart = productId => dispatch(CA.addToCart(productId, cart));

  const removeOneFromCart = productId =>
    dispatch(CA.deletProductFromCart(productId, cart));

  const removeAllFromCart = productId =>
    dispatch(CA.removeAllInstances(productId));

  const emptyCart = () => dispatch(CA.clearCart());
  const createOrder = () => dispatch(OA.createOrder());

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
