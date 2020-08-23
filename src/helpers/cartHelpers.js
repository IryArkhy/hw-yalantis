/**
 * @param {object[]} array - array of products to loop through
 * @param {string} id - id of a product
 * @returns {object|undefined} - product object|undefined
 */
export const findProductById = (array, id) =>
  array.find(product => id === product.id);

/**
 * @param {object[]} array - array to loop through
 * @returns {number} - total price of the shopping list
 */
export const countTotalPrice = array =>
  array.reduce((acc, { price, count }) => {
    acc += price * count;
    return acc;
  }, 0);
