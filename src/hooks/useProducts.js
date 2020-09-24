import { useSelector, useDispatch } from 'react-redux';
import createProductParams from '../helpers/requestHelpers';
import {
  getProducts,
  getUserProducts as getProductsOfUser,
  getUserProductsQuantity,
  getCurrentPage,
  getTotalPages,
} from '../redux/selectors/selectors';
import PA from '../redux/products/productsActions';

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
        PA.getUserProducts(
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
        PA.getAllProducts(
          createProductParams(pageNum, perPage, region, minPrice, maxPrice),
        ),
      );
    }
  };
  const loadWithDebounce = (pageNum, perPage, region, minPrice, maxPrice) =>
    dispatch(
      PA.getProductsDebounce(
        createProductParams(pageNum, perPage, region, minPrice, maxPrice),
      ),
    );

  const postProduct = ({ name, price, origin }) =>
    dispatch(PA.createProduct(name, price, origin));

  const updateProduct = ({ id, name, origin, price }) =>
    dispatch(PA.updateProduct(id, name, origin, price));

  const deleteProductForever = productId => {
    dispatch(PA.deleteProduct(productId));
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
