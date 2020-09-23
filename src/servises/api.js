import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;
axios.defaults.headers.common.Authorization = process.env.REACT_APP_API_KEY;

const makeRequest = (method, url, params, data) => {
  return axios({
    method,
    url,
    baseURL: `${axios.defaults.baseURL}`,
    params,
    responseType: 'json',
    data,
  }).then(res => res.data);
};

export default makeRequest;
