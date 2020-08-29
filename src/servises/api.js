import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;

const getProducts = (method, url, params, data) =>
  axios({
    method,
    url,
    baseURL: `${axios.defaults.baseURL}`,
    params,
    responseType: 'json',
    data,
  });

export default {
  getProducts,
};
