import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;

const getProducts = axios.get('products?perPage=18');

const getNextOrPrevProductsPage = pageNum =>
  axios.get(`products?page=${pageNum}&perPage=18`);

export default {
  getProducts,
  getNextOrPrevProductsPage,
};
