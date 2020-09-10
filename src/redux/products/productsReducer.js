import { combineReducers } from 'redux';
import productsTypes from './productsTypes';

const productsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case productsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return payload.products;

    // case productsTypes.CREATE_PRODUCT_SUCCESS:
    //   return [...state, payload.data];

    // case productsTypes.UPDATE_PRODUCT_SUCCESS:
    //   return state.map(product =>
    //     product.id === payload.data.id
    //       ? { ...product, ...payload.data }
    //       : product,
    //   );

    // case productsTypes.DELETE_PRODUCT_SUCCESS:
    //   return state.filter(el => el.id !== payload.id);

    default:
      return state;
  }
};
const currentPageReducer = (state = 1, { type, payload }) => {
  switch (type) {
    case productsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return payload.page;

    default:
      return state;
  }
};

const totalPagesReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case productsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return payload.pages;
    default:
      return state;
  }
};

const originsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case productsTypes.GET_PRODUCT_ORIGINS_SUCCESS:
      return payload.items;

    default:
      return state;
  }
};

const userProductsReducer = (
  state = { products: [], count: 0 },
  { type, payload },
) => {
  switch (type) {
    case productsTypes.GET_USER_PRODUCTS_SUCCESS:
      return { ...state, products: payload.products, count: payload.count };

    case productsTypes.CREATE_PRODUCT_SUCCESS:
      return {
        products: [...state.products, payload.product],
        count: state.count + 1,
      };

    case productsTypes.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === payload.data.id
            ? { ...product, ...payload.data }
            : product,
        ),
      };

    case productsTypes.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(el => el.id !== payload.id),
        count: state.count - 1,
      };

    default:
      return state;
  }
};

const currentProductReducer = (state = null, { type, payload }) => {
  switch (type) {
    case productsTypes.GET_PRODUCT_SUCCESS:
      return payload.product;

    default:
      return state;
  }
};

const productsErrorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case productsTypes.GET_ALL_PRODUCTS_FAILURE:
    case productsTypes.CREATE_PRODUCT_FAILURE:
    case productsTypes.DELETE_PRODUCT_FAILURE:
    case productsTypes.UPDATE_PRODUCT_FAILURE:
    case productsTypes.GET_PRODUCT_ORIGINS_FAILURE:
    case productsTypes.GET_PRODUCT_FAILURE:
    case productsTypes.GET_USER_PRODUCTS_FAILURE:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  products: productsReducer,
  page: currentPageReducer,
  pages: totalPagesReducer,
  productOrigins: originsReducer,
  userProducts: userProductsReducer,
  currentProduct: currentProductReducer,
  error: productsErrorReducer,
});
