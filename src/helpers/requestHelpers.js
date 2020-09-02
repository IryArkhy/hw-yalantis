// const createProductParams = (
//   page = 1,
//   perPage = 18,
//   origins = [],
//   minPrice = 80,
//   maxPrice = 1000,
// ) => ({
//   page,
//   perPage,
//   origins:
//     // eslint-disable-next-line no-nested-ternary
//     origins.length === 0
//       ? ''
//       : origins.length > 1
//       ? origins.join(',')
//       : origins[0],
//   minPrice,
//   maxPrice,
// });
const createProductParams = (
  page = 1,
  perPage = 18,
  origins = [],
  minPrice = 80,
  maxPrice = 1000,
) => {
  let region;
  if (origins.length === 0) region = '';
  if (origins.length > 1) {
    region = origins.join(',');
  } else {
    // eslint-disable-next-line prefer-destructuring
    region = origins[0];
  }
  return {
    page,
    perPage,
    origins: region,
    minPrice,
    maxPrice,
  };
};

export default createProductParams;
