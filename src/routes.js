export default {
  HOME_PAGE: '/',
  PRODUCT_PAGE: {
    INDEX: '/products/:productId',
    createPath: function createPath(id) {
      return this.INDEX.replace(':productId', id);
    },
  },
  CART_PAGE: '/cart',
  PROFILE_PAGE: '/profile',
  PROFILE_PAGE_PODUCTS: '/profile/products',
  PROFILE_PAGE_ORDERS: '/profile/orders',
  ORDER_PAGE: {
    INDEX: '/profile/orders/:orderId',
    createPath: function createPath(id) {
      return this.INDEX.replace(':orderId', id);
    },
  },
};
