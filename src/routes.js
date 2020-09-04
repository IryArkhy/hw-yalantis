export default {
  HOME_PAGE: '/',
  PRODUCT_PAGE: {
    INDEX: '/products/:productId',
    createPath: function createPath(id) {
      return this.INDEX.replace(':productId', id);
    },
  },
  PROFILE_PAGE: '/profile',
  PROFILE_PAGE_PODUCTS: '/profile/products',
  PROFILE_PAGE_ORDERS: '/profile/orders',
  CART_PAGE: '/cart',
};
