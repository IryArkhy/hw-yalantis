import api from '../../servises/api';
import productsActions from './productsActions';
import { notifyError } from '../../helpers/userNotifiers';
import { USER_MESSAGES } from '../../constants';

export const getAllProducts = params => dispatch => {
  dispatch(productsActions.getAllProductsStart());
  api
    .getProducts('get', '', params)
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
      notifyError(USER_MESSAGES.FIND_PRODUCT_BY_ID_REQUEST_ERROR);
      dispatch(productsActions.getAllProductsFailure(error));
    });
};

export const getProduct = id => dispatch => {
  dispatch(productsActions.getProductStart());

  api
    .getProducts('get', `/${id}`)
    .then(({ data }) => {
      dispatch(productsActions.getProductSuccess(data));
    })
    .catch(error => {
      notifyError(USER_MESSAGES.FIND_PRODUCT_BY_ID_REQUEST_ERROR);
      dispatch(productsActions.getProductFailure(error));
    });
};
