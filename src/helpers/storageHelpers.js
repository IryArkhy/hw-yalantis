/**
 * @param {string} key - key for LocalStorage (LS) in which the data will be saved
 * @param {object[]} value - array of products in the shopping list
 * @returns {void}
 */
const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    throw new Error();
  }
};
/**
 * @param {string} key - key for LocalStorage in which the data will be saved
 * @returns {object[]|null} - null if there is no such key in LS
 */
const get = key => {
  try {
    const keyFromLS = localStorage.getItem(key);
    return keyFromLS ? JSON.parse(keyFromLS) : null;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
  return null;
};

export default { save, get };
