import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { DEFAULT_PRICE_RANGE, PROD_PER_PAGE } from '../constants';
import { getProductsOrigins } from '../redux/selectors/selectors';
import useProducts from './useProducts';
import LS from '../helpers/storageHelpers';
import useQuery from './useQuery';

const useFilters = () => {
  const [perP, , priceRange, region] = useQuery();
  const [perPage, setPerPage] = useState(Number(perP) || PROD_PER_PAGE);
  const [prices, setPrices] = useState(priceRange || DEFAULT_PRICE_RANGE);
  const [origin, setOrigin] = useState(region);
  const origins = useSelector(getProductsOrigins);
  const { loadProducts, page, loadWithDebounce } = useProducts();
  const history = useHistory();
  const location = useLocation();

  const handleChangePrice = (event, newValue) => setPrices(newValue);
  const handleChangePerPage = (event, newValue) => setPerPage(newValue);
  const handleChangeOrigin = ({ target }) => setOrigin(target.value);

  const clearFilters = () => {
    setPerPage(PROD_PER_PAGE);
    setPrices(DEFAULT_PRICE_RANGE);
    setOrigin([]);
    loadProducts();
  };

  useEffect(() => {
    history.push({
      pathname: history.pathname,
      search: `?perPage=${perPage}&prices=${prices.join(',')}${
        origin.length > 0 ? `&origin=${origin.join(',')}` : ''
      }&page=${page}`,
    });
    LS.save('filterQS', location.search);
  }, [history, location.search, origin, origins, page, perPage, prices]);

  useEffect(
    useCallback(() => {
      loadWithDebounce(1, perPage, origin, prices[0], prices[1]);
    }, [loadWithDebounce, origin, perPage, prices]),
    [perPage, origin, prices],
  );

  return {
    perPage,
    prices,
    origin,
    origins,
    handleChangePrice,
    handleChangePerPage,
    handleChangeOrigin,
    clearFilters,
  };
};

export default useFilters;
