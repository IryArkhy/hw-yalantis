import { useSelector, useDispatch } from 'react-redux';
import {
  getAllOrders as getAllOrdersRequest,
  getOrder as getOrderRequest,
  postOrder as createOrder,
} from '../redux/orders/ordersOperations';
import { getOrder, getOrders } from '../redux/selectors/selectors';

const useOrders = () => {
  const currentOrder = useSelector(getOrder);
  const allOrders = useSelector(getOrders);
  const dispatch = useDispatch();

  const postOrder = () => dispatch(createOrder());
  const getAllOrders = () => dispatch(getAllOrdersRequest());
  const getOrderById = orderId => dispatch(getOrderRequest(orderId));

  return {
    allOrders,
    currentOrder,
    postOrder,
    getAllOrders,
    getOrderById,
  };
};

export default useOrders;
