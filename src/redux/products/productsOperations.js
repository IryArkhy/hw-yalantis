import api from '../../servises/api';
import productsActions from './productsActions';
import { notifyError } from '../../helpers/userNotifiers';
import { USER_MESSAGES } from '../../constants';

export const getAllProducts = params => dispatch => {
  dispatch(productsActions.getAllProductsStart());
  api
    .getProducts('get', 'products', params)
    .then(res => {
      const { items, page, perPage, totalItems } = res.data;
      dispatch(
        productsActions.getAllProductsSuccess({
          products: items,
          page,
          pages: Math.ceil(totalItems / perPage),
        }),
      );
    })
    .catch(error => {
      notifyError(USER_MESSAGES.LOAD_PRODUCTS);
      dispatch(productsActions.getAllProductsFailure(error));
    });
};

export const getProduct = id => dispatch => {
  dispatch(productsActions.getProductStart());

  api
    .getProducts('get', `products/${id}`)
    .then(({ data }) => {
      dispatch(productsActions.getProductSuccess(data));
    })
    .catch(error => {
      notifyError(USER_MESSAGES.FIND_PRODUCT_BY_ID_REQUEST_ERROR);
      dispatch(productsActions.getProductFailure(error));
    });
};

export const getProductsOrigins = () => dispatch => {
  dispatch(productsActions.getProductOriginsStart());

  api
    .getProducts('get', 'products-origins')
    .then(({ data }) => {
      dispatch(productsActions.getProductOriginsSuccess(data.items));
    })
    .catch(error => {
      notifyError(USER_MESSAGES.LOAD_PRODUCT_ORIGINS_ERROR);
      dispatch(productsActions.getProductOriginsFailure(error));
    });
};