export const getLoading = store => store.loading;
export const getProducts = store => store.products.products;
export const getUserProducts = store => store.products.userProducts.products;
export const getUserProductsQuantity = store =>
  store.products.userProducts.count;
export const getCurrentProduct = store => store.products.currentProduct;
export const getCurrentPage = store => store.products.page;
export const getTotalPages = store => store.products.pages;
export const getProductsOrigins = store => store.products.productOrigins;
export const getCart = store => store.cart.cart;
export const getOrders = store => store.orders.orders;
export const getOrder = store => store.orders.order;
