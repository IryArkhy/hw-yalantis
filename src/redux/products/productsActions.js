import productsTypes from './productsTypes';

const getAllProducts = params => ({
  type: productsTypes.GET_ALL_PRODUCTS,
  payload: params,
});

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

// --

const getUserProducts = params => ({
  type: productsTypes.GET_USER_PRODUCTS,
  payload: params,
});
const getUserProductsStart = () => ({
  type: productsTypes.GET_USER_PRODUCTS_START,
});

const getUserProductsSuccess = ({ products, count }) => ({
  type: productsTypes.GET_USER_PRODUCTS_SUCCESS,
  payload: {
    products,
    count,
  },
});

const getUserProductsFailure = error => ({
  type: productsTypes.GET_USER_PRODUCTS_FAILURE,
  payload: {
    error,
  },
});

//--
const createProduct = (name, price, origin) => ({
  type: productsTypes.CREATE_PRODUCT,
  payload: {
    name,
    price,
    origin,
  },
});

const createProductStart = () => ({
  type: productsTypes.CREATE_PRODUCT_START,
});

const createProductSuccess = product => ({
  type: productsTypes.CREATE_PRODUCT_SUCCESS,
  payload: {
    product,
  },
});

const createProductFailure = error => ({
  type: productsTypes.CREATE_PRODUCT_FAILURE,
  payload: {
    error,
  },
});

//--
const updateProduct = (id, name, origin, price) => ({
  type: productsTypes.UPDATE_PRODUCT,
  payload: {
    id,
    name,
    origin,
    price,
  },
});

const updateProductStart = () => ({
  type: productsTypes.UPDATE_PRODUCT_START,
});

const updateProductSuccess = product => ({
  type: productsTypes.UPDATE_PRODUCT_SUCCESS,
  payload: {
    product,
  },
});

const updateProductFailure = error => ({
  type: productsTypes.UPDATE_PRODUCT_FAILURE,
  payload: {
    error,
  },
});

//--

const deleteProduct = productId => ({
  type: productsTypes.DELETE_PRODUCT,
  payload: {
    productId,
  },
});

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
const getProductsOrigins = () => ({
  type: productsTypes.GET_PRODUCT_ORIGINS,
});

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

// --
const getProduct = productId => ({
  type: productsTypes.GET_PRODUCT,
  payload: {
    productId,
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
  getAllProducts,
  getAllProductsStart,
  getAllProductsSuccess,
  getAllProductsFailure,

  getUserProducts,
  getUserProductsStart,
  getUserProductsSuccess,
  getUserProductsFailure,

  createProduct,
  createProductStart,
  createProductSuccess,
  createProductFailure,

  updateProduct,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,

  deleteProduct,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,

  getProductsOrigins,
  getProductOriginsStart,
  getProductOriginsSuccess,
  getProductOriginsFailure,

  getProduct,
  getProductStart,
  getProductSuccess,
  getProductFailure,
};
