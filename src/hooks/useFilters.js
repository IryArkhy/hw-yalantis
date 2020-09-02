import { useState } from 'react';
import { useSelector } from 'react-redux';
import { DEFAULT_PRICE_RANGE, PROD_PER_PAGE } from '../constants';
import { getProductsOrigins } from '../redux/selectors/selectors';
import useProducts from './useProducts';

const useFilters = () => {
  const [perPage, setPerPage] = useState(PROD_PER_PAGE);
  const [prices, setPrices] = useState(DEFAULT_PRICE_RANGE);
  const [origin, setOrigin] = useState([]);
  const origins = useSelector(getProductsOrigins);
  const { loadProducts } = useProducts();

  const handleChangePrice = (event, newValue) => setPrices(newValue);
  const handleChangePerPage = (event, newValue) => setPerPage(newValue);
  const handleChangeOrigin = ({ target }) => setOrigin(target.value);

  const clearFilters = () => {
    setPerPage(PROD_PER_PAGE);
    setPrices(DEFAULT_PRICE_RANGE);
    setOrigin([]);
    loadProducts();
  };

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
