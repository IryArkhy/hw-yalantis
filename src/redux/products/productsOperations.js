import makeRequest from '../../servises/api';
import productsActions from './productsActions';
import { notifyError, notifySuccess } from '../../helpers/userNotifiers';
import { USER_MESSAGES } from '../../constants';
import ENDPOINTS from '../../servises/api-constants';

export const getAllProducts = params => dispatch => {
  dispatch(productsActions.getAllProductsStart());
  makeRequest('get', ENDPOINTS.PRODUCTS, params)
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
      notifyError(USER_MESSAGES.ERROR.LOAD_PRODUCTS);
      dispatch(productsActions.getAllProductsFailure(error));
    });
};

export const getUserProducts = params => dispatch => {
  dispatch(productsActions.getUserProductsStart());
  makeRequest('get', ENDPOINTS.PRODUCTS, params)
    .then(res => {
      const { items, totalItems } = res.data;
      dispatch(
        productsActions.getUserProductsSuccess({
          products: items,
          count: totalItems,
        }),
      );
    })
    .catch(error => {
      notifyError(USER_MESSAGES.ERROR.LOAD_PRODUCTS);
      dispatch(productsActions.getUserProductsFailure(error));
    });
};

export const getProduct = productId => dispatch => {
  dispatch(productsActions.getProductStart());

  makeRequest('get', ENDPOINTS.CRUD_PRODUCT_BY_ID.createURL(productId))
    .then(({ data }) => {
      dispatch(productsActions.getProductSuccess(data));
    })
    .catch(error => {
      notifyError(USER_MESSAGES.ERROR.FIND_PRODUCT_BY_ID);
      dispatch(productsActions.getProductFailure(error));
    });
};

export const getProductsOrigins = () => dispatch => {
  dispatch(productsActions.getProductOriginsStart());

  makeRequest('get', ENDPOINTS.GET_PRODUCTS_ORIGINS)
    .then(({ data }) => {
      dispatch(productsActions.getProductOriginsSuccess(data.items));
    })
    .catch(error => {
      notifyError(USER_MESSAGES.ERROR.LOAD_PRODUCT_ORIGINS);
      dispatch(productsActions.getProductOriginsFailure(error));
    });
};

export const createProduct = productData => dispatch => {
  dispatch(productsActions.createProductStart());
  const { name, price, origin } = productData;
  const requestBody = {
    product: {
      name,
      price,
      origin,
    },
  };
  makeRequest('post', ENDPOINTS.PRODUCTS, {}, requestBody)
    .then(({ data }) => {
      dispatch(productsActions.createProductSuccess(data));
      notifySuccess(USER_MESSAGES.SUCCESS.CREATE_PRODUCT);
    })
    .catch(error => {
      notifyError(USER_MESSAGES.ERROR.CREATE_PRODUCT);
      dispatch(productsActions.createProductFailure(error));
    });
};

export const editProduct = productData => dispatch => {
  const { id, name, origin, price } = productData;
  const requestBody = {
    product: {
      name,
      price,
      origin,
    },
  };

  dispatch(productsActions.updateProductStart());
  makeRequest(
    'patch',
    ENDPOINTS.CRUD_PRODUCT_BY_ID.createURL(id),
    {},
    requestBody,
  )
    .then(({ data }) => {
      dispatch(productsActions.updateProductSuccess(data));
      notifySuccess(USER_MESSAGES.SUCCESS.EDIT_PRODUCT);
    })
    .catch(error => {
      dispatch(productsActions.updateProductFailure(error));
      notifyError(USER_MESSAGES.ERROR.EDIT_PRODUCT);
    });
};

export const deleteProduct = productId => dispatch => {
  dispatch(productsActions.deleteProductStart());

  makeRequest('delete', ENDPOINTS.CRUD_PRODUCT_BY_ID.createURL(productId))
    .then(({ data }) => {
      dispatch(productsActions.deleteProductSuccess(productId));
      notifySuccess(USER_MESSAGES.SUCCESS.DELETE_PRODUCT);
    })
    .catch(error => {
      dispatch(productsActions.deleteProductFailure(error));
      notifyError(USER_MESSAGES.ERROR.DELETE_PRODUCT);
    });
};
