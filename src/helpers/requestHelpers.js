const createProductParams = (
  page = 1,
  perPage = 18,
  origins = [],
  minPrice = 80,
  maxPrice = 1000,
  editable,
) => {
  let region;
  if (origins.length === 0) {
    region = null;
  } else if (origins.length > 1) {
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
    editable,
  };
};

export default createProductParams;
