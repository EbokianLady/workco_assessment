// import _products from './products.json';
import axios from 'axios';

const TIMEOUT = 100;
const url = 'http://tech.work.co/shopping-cart/products.json';

export default {
  getProducts: (cb, timeout) => {
    axios.get(url).then(products => cb(products), timeout || TIMEOUT);
  },
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
};
