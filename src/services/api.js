import axios from 'axios';

const API_URL = 'http://localhost:4000';

const createHeaders = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const signUp = (body) => axios.post(`${API_URL}/sign-up`, body);
const signIn = (body) => axios.post(`${API_URL}/sign-in`, body);
const getCartProducts = (token) => axios.get(`${API_URL}/cart-products`, createHeaders(token));
const getDeliveryInfo = (token) => axios.get(`${API_URL}/delivery`, createHeaders(token));
const getPaymentInfo = (token) => axios.get(`${API_URL}/payment`, createHeaders(token));
const home = () => axios.get(`${API_URL}/home`);

export {
  signUp, signIn, getCartProducts, getDeliveryInfo, getPaymentInfo, home,
};
