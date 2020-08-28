import productsTypes from '../products/productsTypes';
import ordersTypes from '../orders/ordersTypes';

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case productsTypes.GET_ALL_PRODUCTS_START:
    case productsTypes.GET_PRODUCT_START:
    case productsTypes.CREATE_PRODUCT_START:
    case productsTypes.UPDATE_PRODUCT_START:
    case productsTypes.DELETE_CHALLENGE_START:
    case productsTypes.GET_PRODUCT_ORIGINS_START:
    case ordersTypes.GET_ORDER_START:
    case ordersTypes.GET_ALL_ORDERS_START:
      return true;

    case productsTypes.GET_ALL_PRODUCTS_SUCCESS:
    case productsTypes.GET_PRODUCT_SUCCESS:
    case productsTypes.CREATE_PRODUCT_SUCCESS:
    case productsTypes.UPDATE_PRODUCT_SUCCESS:
    case productsTypes.DELETE_CHALLENGE_SUCCESS:
    case productsTypes.GET_PRODUCT_ORIGINS_SUCCESS:
    case ordersTypes.GET_ORDER_SUCCESS:
    case ordersTypes.GET_ALL_ORDERS_SUCCESS:
    case productsTypes.GET_ALL_PRODUCTS_FAILURE:
    case productsTypes.GET_PRODUCT_FAILURE:
    case productsTypes.CREATE_PRODUCT_FAILURE:
    case productsTypes.UPDATE_PRODUCT_FAILURE:
    case productsTypes.DELETE_CHALLENGE_FAILURE:
    case productsTypes.GET_PRODUCT_ORIGINS_FAILURE:
    case ordersTypes.GET_ORDER_FAILURE:
    case ordersTypes.GET_ALL_ORDERS_FAILURE:
      return false;

    default:
      return state;
  }
};

export default loadingReducer;
