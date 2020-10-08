import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getOrder, getOrders } from '../redux/selectors/selectors';
import routes from '../routes';
import ordersActions from '../redux/orders/ordersActions';
import useCart from './useCart';

const useOrders = () => {
  const currentOrder = useSelector(getOrder);
  const { cart } = useCart();
  const allOrders = useSelector(getOrders);
  const dispatch = useDispatch();
  const history = useHistory();

  const postOrder = () => {
    dispatch(ordersActions.createOrder(cart));
    history.push(routes.PROFILE_PAGE_ORDERS);
  };
  const getAllOrders = () => dispatch(ordersActions.getAllOrders());
  const getOrderById = orderId => dispatch(ordersActions.getOrder(orderId));
  const getToOrderDetailsPage = id =>
    history.push(routes.ORDER_PAGE.createPath(id));

  return {
    allOrders,
    currentOrder,
    postOrder,
    getAllOrders,
    getOrderById,
    getToOrderDetailsPage,
  };
};

export default useOrders;
