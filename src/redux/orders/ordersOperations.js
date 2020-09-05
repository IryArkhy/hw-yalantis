import makeRequest from '../../servises/api';
import ordersActions from './ordersActions';
import { notifyError } from '../../helpers/userNotifiers';
import { USER_MESSAGES } from '../../constants';
import ENDPOINTS from '../../servises/api-constants';

export const getAllOrders = () => dispatch => {
  dispatch(ordersActions.getAllOrdersStart());
  makeRequest('get', ENDPOINTS.GET_POST_ORDERS)
    .then(res => {
      const { items } = res.data;
      dispatch(
        ordersActions.getAllOrdersSuccess({
          orders: items,
        }),
      );
    })
    .catch(error => {
      notifyError(USER_MESSAGES.ERROR.LOAD_ORDERS);
      dispatch(ordersActions.getAllOrdersFailure(error));
    });
};

export const getOrder = orderId => dispatch => {
  dispatch(ordersActions.getOrderStart());

  makeRequest('get', ENDPOINTS.GET_ORDER_BY_ID.createURL(orderId))
    .then(({ data }) => {
      dispatch(ordersActions.getOrderSuccess(data));
    })
    .catch(error => {
      notifyError(USER_MESSAGES.ERROR.GET_ORDER_BY_ID);
      dispatch(ordersActions.getOrderFailure(error));
    });
};

export const postOrder = () => (dispatch, getState) => {
  const state = getState();
  const { cart } = state;

  const requestBody = {
    order: {
      pieces: cart.cart.map(product => ({
        productId: product.id,
        count: product.count,
      })),
    },
  };

  dispatch(ordersActions.createOrderStart());

  makeRequest('post', ENDPOINTS.GET_POST_ORDERS, {}, requestBody)
    .then(({ data }) => {
      dispatch(ordersActions.createOrderSuccess(data));
    })
    .catch(error => {
      notifyError(USER_MESSAGES.ERROR.POST_ORDER);
      dispatch(ordersActions.createOrderFailure(error));
    });
};
