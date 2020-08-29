const createProductParams = (
  page = 1,
  perPage = 18,
  origins = '',
  minPrice = 0,
  maxPrice = 1000,
) => ({
  page,
  perPage,
  origins,
  minPrice,
  maxPrice,
});

export default createProductParams;
