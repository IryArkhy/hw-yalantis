import { useSelector, useDispatch } from 'react-redux';
import {
  getAllProducts,
  getUserProducts,
  createProduct,
  editProduct,
  deleteProduct,
} from '../redux/products/productsOperations';
import createProductParams from '../helpers/requestHelpers';
import {
  getProducts,
  getUserProducts as getProductsOfUser,
  getUserProductsQuantity,
  getCurrentPage,
  getTotalPages,
} from '../redux/selectors/selectors';

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
      dispatch(getUserProducts({ editable: isEditable }));
    } else {
      dispatch(
        getAllProducts(
          createProductParams(pageNum, perPage, region, minPrice, maxPrice),
        ),
      );
    }
  };
  const postProduct = productData => dispatch(createProduct(productData));
  const updateProduct = productData => dispatch(editProduct(productData));
  const deleteProductForever = productId => {
    console.log(productId);
    dispatch(deleteProduct(productId));
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
  };
};

export default useProducts;
