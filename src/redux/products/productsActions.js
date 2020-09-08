import productsTypes from './productsTypes';

const getAllProductsStart = () => ({
  type: productsTypes.GET_ALL_PRODUCTS_START,
});

const getAllProductsSuccess = ({ products, page, pages }) => ({
  type: productsTypes.GET_ALL_PRODUCTS_SUCCESS,
  payload: {
    products,
    page,
    pages,
  },
});

const getAllProductsFailure = error => ({
  type: productsTypes.GET_ALL_PRODUCTS_FAILURE,
  payload: {
    error,
  },
});

//--
const createProductStart = () => ({
  type: productsTypes.CREATE_PRODUCT_START,
});

const createProductSuccess = data => ({
  type: productsTypes.CREATE_PRODUCT_SUCCESS,
  payload: {
    data,
  },
});

const createProductFailure = error => ({
  type: productsTypes.CREATE_PRODUCT_FAILURE,
  payload: {
    error,
  },
});

//--
const updateProductStart = () => ({
  type: productsTypes.UPDATE_PRODUCT_START,
});

const updateProductSuccess = data => ({
  type: productsTypes.UPDATE_PRODUCT_SUCCESS,
  payload: {
    data,
  },
});

const updateProductFailure = error => ({
  type: productsTypes.UPDATE_PRODUCT_FAILURE,
  payload: {
    error,
  },
});

//--
const deleteProductStart = () => ({
  type: productsTypes.DELETE_PRODUCT_START,
});

const deleteProductSuccess = id => ({
  type: productsTypes.DELETE_PRODUCT_SUCCESS,
  payload: {
    id,
  },
});

const deleteProductFailure = error => ({
  type: productsTypes.DELETE_PRODUCT_FAILURE,
  payload: {
    error,
  },
});

//------

const getProductOriginsStart = () => ({
  type: productsTypes.GET_PRODUCT_ORIGINS_START,
});

const getProductOriginsSuccess = items => ({
  type: productsTypes.GET_PRODUCT_ORIGINS_SUCCESS,
  payload: {
    items,
  },
});

const getProductOriginsFailure = error => ({
  type: productsTypes.GET_PRODUCT_ORIGINS_FAILURE,
  payload: {
    error,
  },
});

const getProductStart = () => ({
  type: productsTypes.GET_PRODUCT_START,
});

const getProductSuccess = product => ({
  type: productsTypes.GET_PRODUCT_SUCCESS,
  payload: {
    product,
  },
});

const getProductFailure = error => ({
  type: productsTypes.GET_PRODUCT_FAILURE,
  payload: {
    error,
  },
});

export default {
  getAllProductsStart,
  getAllProductsSuccess,
  getAllProductsFailure,

  createProductStart,
  createProductSuccess,
  createProductFailure,

  updateProductStart,
  updateProductSuccess,
  updateProductFailure,

  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,

  getProductOriginsStart,
  getProductOriginsSuccess,
  getProductOriginsFailure,

  getProductStart,
  getProductSuccess,
  getProductFailure,
};
