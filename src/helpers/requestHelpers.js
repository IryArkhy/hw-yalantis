// https://yalantis-react-school-api.yalantis.com/api/v1/products?perPage=20&origins=usa,asia&minPrice=300&maxPrice=900
const createProductParams = (
  page = 1,
  perPage = 18,
  origins = [],
  minPrice = 0,
  maxPrice = 1000,
) => ({
  page,
  perPage,
  origins:
    // eslint-disable-next-line no-nested-ternary
    origins.length === 0
      ? ''
      : origins.length > 1
      ? origins.join(',')
      : origins[0],
  minPrice,
  maxPrice,
});

export default createProductParams;
