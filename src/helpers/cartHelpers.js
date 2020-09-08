/**
 * @param {object[]} array - array of products to loop through
 * @param {string} id - id of a product
 * @returns {object|undefined} - product object|undefined
 */
const findProductById = (array, id) => array.find(product => id === product.id);

export default findProductById;
