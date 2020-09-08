export default {
  HOME_PAGE: '/',
  PRODUCT_PAGE: {
    INDEX: '/products/:productId',
    createPath: function createPath(id) {
      return this.INDEX.replace(':productId', id);
    },
  },
  CART_PAGE: '/cart',
};
