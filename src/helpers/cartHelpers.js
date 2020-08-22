export const findProductById = (array, id) =>
  array.find(product => id === product.id);
export const countTotalPrice = array =>
  array.reduce((acc, { price, count }) => {
    acc += price * count;
    return acc;
  }, 0);
