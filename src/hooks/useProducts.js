import { useSelector, useDispatch } from 'react-redux';
import createProductParams from '../helpers/requestHelpers';
import {
  getProducts,
  getUserProducts as getProductsOfUser,
  getUserProductsQuantity,
  getCurrentPage,
  getTotalPages,
} from '../redux/selectors/selectors';
import productsActions from '../redux/products/productsActions';

const useProducts = () => {
  const products = useSelector(getProducts);
  const userProducts = useSelector(getProductsOfUser);
  const userProductsQuantity = useSelector(getUserProductsQuantity);
  const page = useSelector(getCurrentPage);
  const pages = useSelector(getTotalPages);

  const dispatch = useDispatch();

  const loadProducts = (
    pageNum,
    perPage,
    region,
    minPrice,
    maxPrice,
    isEditable,
  ) => {
    if (isEditable) {
      dispatch(
        productsActions.getUserProducts(
          createProductParams(
            pageNum,
            perPage,
            region,
            minPrice,
            maxPrice,
            isEditable,
          ),
        ),
      );
    } else {
      dispatch(
        productsActions.getAllProducts(
          createProductParams(pageNum, perPage, region, minPrice, maxPrice),
        ),
      );
    }
  };
  const loadWithDebounce = (pageNum, perPage, region, minPrice, maxPrice) => {
    dispatch(
      productsActions.getProductsDebounce(
        createProductParams(pageNum, perPage, region, minPrice, maxPrice),
      ),
    );
  };

  const postProduct = ({ name, price, origin }) =>
    dispatch(productsActions.createProduct(name, price, origin));

  const updateProduct = ({ id, name, origin, price }) =>
    dispatch(productsActions.updateProduct(id, name, origin, price));

  const deleteProductForever = productId => {
    dispatch(productsActions.deleteProduct(productId));
  };

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
    userProducts,
    userProductsQuantity,
    page,
    pages,
    loadProducts,
    postProduct,
    updateProduct,
    deleteProductForever,
    getPreviousPage,
    getNextPage,
    loadWithDebounce,
  };
};

export default useProducts;
