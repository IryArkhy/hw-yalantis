export const PLACEHOLDER_URL = 'https://google.com';

export const USER_MESSAGES = {
  ERROR: {
    ADD_OR_REMOVE_FROM_CART: '🔥The product is not found',
    FIND_PRODUCT_BY_ID:
      '🔥Something went wrong. Go back to home page and try again later',
    LOAD_PRODUCTS:
      '🔥An error occured: the products cannot be loaded. Please, try visit the web-page later ',
    LOAD_PRODUCT_ORIGINS:
      '🔥An error occured: origin filters might not work correctly',
    LOAD_ORDERS:
      "🔥We couldn't get your orders. Go back to Home Page and try again later. ",
    GET_ORDER_BY_ID: "🔥The order's not found.",
    POST_ORDER: '🔥The order is not posted. Try again later.',
    CREATE_PRODUCT: '🔥An error occured. Try to create you product later.',
    EDIT_PRODUCT: '🔥An error occured. Try to edit you product later.',
    DELETE_PRODUCT: '🔥An error occured. Try to delete you product later.',
  },
  SUCCESS: {
    ADD_TO_CART: '🎉 The product is in your shopping list!!',
    POST_ORDER: "🎉You've posted the order successfully",
    CREATE_PRODUCT: "🎉The product's created!",
    EDIT_PRODUCT: "🎉The product's edited!",
    DELETE_PRODUCT: "🎉The product's deleted!",
  },
};

export const PROD_PER_PAGE = 18;
export const DEFAULT_PRICE_RANGE = [100, 1000];

export const MODAL_ROOT = document.querySelector('#modal-root');
export const LOADER_ROOT = document.querySelector('#loader-root');
