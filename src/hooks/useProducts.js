import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../redux/products/productsOperations';
import createProductParams from '../helpers/requestHelpers';
import {
  getProducts,
  getCurrentPage,
  getTotalPages,
} from '../redux/selectors/selectors';

const useProducts = () => {
  const products = useSelector(getProducts);
  const page = useSelector(getCurrentPage);
  const pages = useSelector(getTotalPages);

  const dispatch = useDispatch();

  const loadProducts = (pageNum, perPage, region, minPrice, maxPrice) =>
    dispatch(
      getAllProducts(
        createProductParams(pageNum, perPage, region, minPrice, maxPrice),
      ),
    );

  const getPreviousPage = (pageNum, perPage, region, minPrice, maxPrice) => {
    if (page === 1) return;
    loadProducts(pageNum - 1, perPage, region, minPrice, maxPrice);
  };
  const getNextPage = (pageNum, perPage, region, minPrice, maxPrice) => {
    if (page === pages) return;
    loadProducts(pageNum + 1, perPage, region, minPrice, maxPrice);
  };

  return {
    products,
    page,
    pages,
    loadProducts,
    getPreviousPage,
    getNextPage,
  };
};

export default useProducts;
