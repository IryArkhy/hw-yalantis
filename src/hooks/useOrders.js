import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  getAllOrders as getAllOrdersRequest,
  getOrder as getOrderRequest,
  postOrder as createOrder,
} from '../redux/orders/ordersOperations';
import { getOrder, getOrders } from '../redux/selectors/selectors';
import routes from '../routes';

const useOrders = () => {
  const currentOrder = useSelector(getOrder);
  const allOrders = useSelector(getOrders);
  const dispatch = useDispatch();
  const history = useHistory();

  const postOrder = () => dispatch(createOrder());
  const getAllOrders = () => dispatch(getAllOrdersRequest());
  const getOrderById = orderId => dispatch(getOrderRequest(orderId));
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
