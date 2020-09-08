const ENDPOINTS = {
  GET_PRODUCTS: 'products',
  GET_PRODUCT_BY_ID: {
    INDEX: 'products',
    createURL: function createURL(productId) {
      return this.INDEX.concat('/', productId);
    },
  },
  GET_PRODUCTS_ORIGINS: 'products-origins',
};
export default ENDPOINTS;
