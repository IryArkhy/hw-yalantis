const ENDPOINTS = {
  PRODUCTS: 'products',
  CRUD_PRODUCT_BY_ID: {
    INDEX: 'products',
    createURL: function createURL(productId) {
      return this.INDEX.concat('/', productId);
    },
  },
  GET_PRODUCTS_ORIGINS: 'products-origins',
  GET_POST_ORDERS: 'orders',
  GET_ORDER_BY_ID: {
    INDEX: 'orders',
    createURL: function createURL(orderId) {
      return `${this.INDEX}/${orderId}`;
    },
  },
};
export default ENDPOINTS;
