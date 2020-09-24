import PT from './productsTypes';

const getAllProducts = params => ({
  type: PT.GET_ALL_PRODUCTS,
  payload: params,
});

const getAllProductsStart = () => ({
  type: PT.GET_ALL_PRODUCTS_START,
});

const getAllProductsSuccess = ({ products, page, pages }) => ({
  type: PT.GET_ALL_PRODUCTS_SUCCESS,
  payload: {
    products,
    page,
    pages,
  },
});

const getAllProductsFailure = error => ({
  type: PT.GET_ALL_PRODUCTS_FAILURE,
  payload: {
    error,
  },
});

// --

const getProductsDebounce = params => ({
  type: PT.LOAD_PRODUCTS_WITH_DEBOUNCE,
  payload: params,
});

const getProductsDebounceStart = () => ({
  type: PT.LOAD_PRODUCTS_WITH_DEBOUNCE_START,
});

const getProductsDebounceSuccess = ({ products, page, pages }) => ({
  type: PT.LOAD_PRODUCTS_WITH_DEBOUNCE_SUCCESS,
  payload: {
    products,
    page,
    pages,
  },
});

const getProductsDebounceFailure = error => ({
  type: PT.LOAD_PRODUCTS_WITH_DEBOUNCE_FAILURE,
  payload: {
    error,
  },
});

// --

const getUserProducts = params => ({
  type: PT.GET_USER_PRODUCTS,
  payload: params,
});
const getUserProductsStart = () => ({
  type: PT.GET_USER_PRODUCTS_START,
});

const getUserProductsSuccess = ({ products, count }) => ({
  type: PT.GET_USER_PRODUCTS_SUCCESS,
  payload: {
    products,
    count,
  },
});

const getUserProductsFailure = error => ({
  type: PT.GET_USER_PRODUCTS_FAILURE,
  payload: {
    error,
  },
});

//--
const createProduct = (name, price, origin) => ({
  type: PT.CREATE_PRODUCT,
  payload: {
    name,
    price,
    origin,
  },
});

const createProductStart = () => ({
  type: PT.CREATE_PRODUCT_START,
});

const createProductSuccess = product => ({
  type: PT.CREATE_PRODUCT_SUCCESS,
  payload: {
    product,
  },
});

const createProductFailure = error => ({
  type: PT.CREATE_PRODUCT_FAILURE,
  payload: {
    error,
  },
});

//--
const updateProduct = (id, name, origin, price) => ({
  type: PT.UPDATE_PRODUCT,
  payload: {
    id,
    name,
    origin,
    price,
  },
});

const updateProductStart = () => ({
  type: PT.UPDATE_PRODUCT_START,
});

const updateProductSuccess = product => ({
  type: PT.UPDATE_PRODUCT_SUCCESS,
  payload: {
    product,
  },
});

const updateProductFailure = error => ({
  type: PT.UPDATE_PRODUCT_FAILURE,
  payload: {
    error,
  },
});

//--

const deleteProduct = productId => ({
  type: PT.DELETE_PRODUCT,
  payload: {
    productId,
  },
});

const deleteProductStart = () => ({
  type: PT.DELETE_PRODUCT_START,
});

const deleteProductSuccess = id => ({
  type: PT.DELETE_PRODUCT_SUCCESS,
  payload: {
    id,
  },
});

const deleteProductFailure = error => ({
  type: PT.DELETE_PRODUCT_FAILURE,
  payload: {
    error,
  },
});

//------
const getProductsOrigins = () => ({
  type: PT.GET_PRODUCT_ORIGINS,
});

const getProductOriginsStart = () => ({
  type: PT.GET_PRODUCT_ORIGINS_START,
});

const getProductOriginsSuccess = items => ({
  type: PT.GET_PRODUCT_ORIGINS_SUCCESS,
  payload: {
    items,
  },
});

const getProductOriginsFailure = error => ({
  type: PT.GET_PRODUCT_ORIGINS_FAILURE,
  payload: {
    error,
  },
});

// --
const getProduct = productId => ({
  type: PT.GET_PRODUCT,
  payload: {
    productId,
  },
});

const getProductStart = () => ({
  type: PT.GET_PRODUCT_START,
});

const getProductSuccess = product => ({
  type: PT.GET_PRODUCT_SUCCESS,
  payload: {
    product,
  },
});

const getProductFailure = error => ({
  type: PT.GET_PRODUCT_FAILURE,
  payload: {
    error,
  },
});

export default {
  getAllProducts,
  getAllProductsStart,
  getAllProductsSuccess,
  getAllProductsFailure,

  getProductsDebounce,
  getProductsDebounceStart,
  getProductsDebounceSuccess,
  getProductsDebounceFailure,

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
